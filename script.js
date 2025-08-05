// DOM 元素
const elements = {
    apiKey: document.getElementById('apiKey'),
    workflowId: document.getElementById('workflowId'),
    customBaseUrl: document.getElementById('customBaseUrl'),
    userRequirement: document.getElementById('userRequirement'),
    submitBtn: document.getElementById('submitBtn'),
    toggleApiKey: document.getElementById('toggleApiKey'),
    toggleAdvanced: document.getElementById('toggleAdvanced'),
    advancedOptions: document.getElementById('advancedOptions'),
    apiEndpoint: document.getElementById('apiEndpoint'),
    authType: document.getElementById('authType'),
    loadingState: document.getElementById('loadingState'),
    resultSection: document.getElementById('resultSection'),
    summaryContent: document.getElementById('summaryContent'),
    configId: document.getElementById('configId'),
    configTime: document.getElementById('configTime'),
    totalItems: document.getElementById('totalItems'),
    configItems: document.getElementById('configItems'),
    configSummary: document.getElementById('configSummary'),
    errorMessage: document.getElementById('errorMessage'),
    errorText: document.getElementById('errorText'),
    closeError: document.getElementById('closeError')
};

// 全局配置
let appConfig = null;
let currentConfigData = null;
let currentCategory = 'all';

// 初始化
document.addEventListener('DOMContentLoaded', async function() {
    try {
        await loadAppConfig();
        initializeEventListeners();
        loadSavedConfig();
        updateConfigDisplay();
    } catch (error) {
        console.error('初始化失败:', error);
        showError('配置文件加载失败: ' + error.message);
    }
});

// 加载应用配置
async function loadAppConfig() {
    try {
        const response = await fetch('./config.json');
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        appConfig = await response.json();

        // 更新页面标题和内容
        if (appConfig.ui) {
            document.title = appConfig.ui.title || document.title;

            const titleElement = document.querySelector('.logo h1');
            if (titleElement && appConfig.ui.title) {
                titleElement.textContent = appConfig.ui.title;
            }

            const subtitleElement = document.querySelector('.subtitle');
            if (subtitleElement && appConfig.ui.subtitle) {
                subtitleElement.textContent = appConfig.ui.subtitle;
            }

            const placeholderElement = elements.userRequirement;
            if (placeholderElement && appConfig.ui.placeholderText) {
                placeholderElement.placeholder = appConfig.ui.placeholderText;
            }
        }

        // 更新建议问题
        updateSuggestedQuestions();

    } catch (error) {
        console.error('加载配置文件失败:', error);
        // 使用默认配置
        appConfig = getDefaultConfig();
        throw error;
    }
}

// 获取默认配置
function getDefaultConfig() {
    return {
        api: {
            baseUrl: "https://api.dify.ai/v1/workflows/run",
            authentication: {
                type: "bearer",
                headerName: "Authorization",
                tokenPrefix: "Bearer "
            },
            headers: {
                "Content-Type": "application/json"
            },
            timeout: 30000
        },
        workflow: {
            responseMode: "blocking",
            userIdPrefix: "web-user-"
        },
        ui: {
            suggestedQuestions: [
                "我需要2台云服务器，4核8GB配置",
                "搭建一个电商网站，需要高可用架构",
                "开发环境需要MySQL数据库和应用服务器"
            ]
        },
        features: {
            saveApiKey: true,
            showAdvancedOptions: false
        }
    };
}

// 更新建议问题
function updateSuggestedQuestions() {
    const suggestionsContainer = document.querySelector('.suggestions');
    if (!suggestionsContainer || !appConfig.ui?.suggestedQuestions) return;

    suggestionsContainer.innerHTML = '';
    appConfig.ui.suggestedQuestions.forEach(question => {
        const btn = document.createElement('button');
        btn.className = 'suggestion-btn';
        btn.dataset.text = question;
        btn.textContent = question;
        btn.addEventListener('click', function() {
            elements.userRequirement.value = this.dataset.text;
        });
        suggestionsContainer.appendChild(btn);
    });
}

// 更新配置显示
function updateConfigDisplay() {
    if (!appConfig) return;

    // 显示 API 端点
    if (elements.apiEndpoint) {
        elements.apiEndpoint.textContent = appConfig.api.baseUrl;
    }

    // 显示认证方式
    if (elements.authType) {
        const authType = appConfig.api.authentication.type;
        elements.authType.textContent = authType === 'bearer' ? 'Bearer Token' : authType;
    }

    // 显示/隐藏高级选项
    if (appConfig.features?.showAdvancedOptions) {
        elements.advancedOptions.style.display = 'block';
        elements.toggleAdvanced.classList.add('expanded');
    }
}

// 初始化事件监听器
function initializeEventListeners() {
    // API Key 显示/隐藏切换
    elements.toggleApiKey.addEventListener('click', toggleApiKeyVisibility);

    // 高级选项切换
    elements.toggleAdvanced.addEventListener('click', toggleAdvancedOptions);

    // 提交按钮
    elements.submitBtn.addEventListener('click', handleSubmit);

    // 分类标签切换
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            switchCategory(this.dataset.category);
        });
    });

    // 错误消息关闭
    elements.closeError.addEventListener('click', hideError);

    // 保存配置
    if (appConfig?.features?.saveApiKey) {
        elements.apiKey.addEventListener('input', saveConfig);
        elements.workflowId.addEventListener('input', saveConfig);
        elements.customBaseUrl.addEventListener('input', saveConfig);
    }
}

// 切换 API Key 显示状态
function toggleApiKeyVisibility() {
    const input = elements.apiKey;
    const icon = elements.toggleApiKey.querySelector('i');

    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// 切换高级选项
function toggleAdvancedOptions() {
    const isExpanded = elements.toggleAdvanced.classList.contains('expanded');

    if (isExpanded) {
        elements.advancedOptions.style.display = 'none';
        elements.toggleAdvanced.classList.remove('expanded');
    } else {
        elements.advancedOptions.style.display = 'block';
        elements.toggleAdvanced.classList.add('expanded');
    }
}



// 保存配置到本地存储
function saveConfig() {
    if (!appConfig?.features?.saveApiKey) return;

    const config = {
        apiKey: elements.apiKey.value,
        workflowId: elements.workflowId.value,
        customBaseUrl: elements.customBaseUrl.value
    };
    localStorage.setItem('cloudAdvisorConfig', JSON.stringify(config));
}

// 加载保存的配置
function loadSavedConfig() {
    if (!appConfig?.features?.saveApiKey) return;

    const saved = localStorage.getItem('cloudAdvisorConfig');
    if (saved) {
        try {
            const config = JSON.parse(saved);
            elements.apiKey.value = config.apiKey || '';
            elements.workflowId.value = config.workflowId || '';
            elements.customBaseUrl.value = config.customBaseUrl || '';
        } catch (e) {
            console.warn('Failed to load saved config:', e);
        }
    }
}

// 显示错误消息
function showError(message) {
    elements.errorText.textContent = message;
    elements.errorMessage.classList.remove('hidden');
    
    // 3秒后自动隐藏
    setTimeout(hideError, 5000);
}

// 隐藏错误消息
function hideError() {
    elements.errorMessage.classList.add('hidden');
}

// 显示加载状态
function showLoading() {
    elements.loadingState.classList.remove('hidden');
    elements.resultSection.classList.add('hidden');
    elements.submitBtn.disabled = true;
    elements.submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>分析中...</span>';
}

// 隐藏加载状态
function hideLoading() {
    elements.loadingState.classList.add('hidden');
    elements.submitBtn.disabled = false;
    elements.submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i><span>生成配置清单</span>';
}

// 处理提交
async function handleSubmit() {
    const apiKey = elements.apiKey.value.trim();
    const requirement = elements.userRequirement.value.trim();

    // 验证输入
    if (!apiKey) {
        showError('请输入 API Key');
        return;
    }

    if (!requirement) {
        showError('请输入您的云服务需求');
        return;
    }

    // 验证 API Key 格式
    if (apiKey.length < 10) {
        showError('API Key 格式不正确，请检查输入');
        return;
    }

    showLoading();

    try {
        const result = await callDifyAPI(apiKey, requirement);
        displayResult(result);

        // 保存成功使用的配置
        if (appConfig?.features?.autoSaveConfig) {
            saveConfig();
        }

    } catch (error) {
        console.error('API call failed:', error);

        // 提供更友好的错误信息和解决建议
        let errorMessage = error.message;
        let suggestions = [];

        if (error.message.includes('超时')) {
            suggestions = [
                '检查网络连接是否稳定',
                '尝试使用更简短的需求描述',
                '稍后重试，服务器可能暂时繁忙'
            ];
        } else if (error.message.includes('API Key')) {
            suggestions = [
                '确认 API Key 是否正确',
                '检查 API Key 是否有效且未过期',
                '确认 API Key 有访问工作流的权限'
            ];
        } else if (error.message.includes('网络')) {
            suggestions = [
                '检查网络连接',
                '确认 API 端点地址是否正确',
                '检查防火墙或代理设置'
            ];
        } else if (error.message.includes('数据格式')) {
            suggestions = [
                '检查工作流配置是否正确',
                '确认工作流 ID 是否有效',
                '联系管理员检查工作流设置'
            ];
        }

        showDetailedError(errorMessage, suggestions);

    } finally {
        hideLoading();
    }
}

// 显示详细错误信息
function showDetailedError(message, suggestions = []) {
    let errorHtml = `<div class="error-main">${message}</div>`;

    if (suggestions.length > 0) {
        errorHtml += '<div class="error-suggestions"><strong>建议解决方案:</strong><ul>';
        suggestions.forEach(suggestion => {
            errorHtml += `<li>${suggestion}</li>`;
        });
        errorHtml += '</ul></div>';
    }

    elements.errorText.innerHTML = errorHtml;
    elements.errorMessage.classList.remove('hidden');

    // 10秒后自动隐藏
    setTimeout(hideError, 10000);
}

// 调用 Dify API (带重试机制)
async function callDifyAPI(apiKey, requirement) {
    if (!appConfig) {
        throw new Error('应用配置未加载');
    }

    const maxRetries = appConfig.api.retryAttempts || 2;
    const retryDelay = appConfig.api.retryDelay || 1000;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            return await performAPICall(apiKey, requirement, attempt);
        } catch (error) {
            console.warn(`API 调用失败 (尝试 ${attempt + 1}/${maxRetries + 1}):`, error.message);

            // 如果是最后一次尝试，抛出错误
            if (attempt === maxRetries) {
                throw error;
            }

            // 如果是认证错误或格式错误，不重试
            if (error.message.includes('401') ||
                error.message.includes('403') ||
                error.message.includes('API Key') ||
                error.message.includes('数据格式不正确')) {
                throw error;
            }

            // 等待后重试
            await new Promise(resolve => setTimeout(resolve, retryDelay * (attempt + 1)));
        }
    }
}

// 执行单次 API 调用
async function performAPICall(apiKey, requirement, attempt = 0) {
    const workflowId = elements.workflowId.value.trim();
    const customBaseUrl = elements.customBaseUrl.value.trim();

    // 构建 API URL
    let apiUrl = customBaseUrl || appConfig.api.baseUrl;
    if (workflowId) {
        // 如果指定了工作流ID，修改URL
        if (apiUrl.includes('/workflows/run')) {
            apiUrl = apiUrl.replace('/workflows/run', `/workflows/${workflowId}/run`);
        } else {
            apiUrl = `${apiUrl}/${workflowId}/run`;
        }
    }

    // 构建请求体
    const requestBody = {
        inputs: {
            user_requirement: requirement
        },
        response_mode: appConfig.workflow.responseMode || "blocking",
        user: (appConfig.workflow.userIdPrefix || "web-user-") + Date.now()
    };

    // 构建请求头
    const headers = { ...appConfig.api.headers };

    // 添加认证头
    const auth = appConfig.api.authentication;
    if (auth.type === 'bearer') {
        headers[auth.headerName] = (auth.tokenPrefix || '') + apiKey;
    } else {
        headers[auth.headerName] = apiKey;
    }

    // 动态调整超时时间（重试时增加超时时间）
    const baseTimeout = appConfig.api.timeout || 60000;
    const timeout = baseTimeout + (attempt * 10000); // 每次重试增加10秒

    // 发送请求
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
        console.log(`发送 API 请求 (尝试 ${attempt + 1}):`, {
            url: apiUrl,
            timeout: timeout,
            hasWorkflowId: !!workflowId
        });

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            const errorMessage = errorData.message || `HTTP ${response.status}: ${response.statusText}`;

            // 根据状态码提供更具体的错误信息
            if (response.status === 401) {
                throw new Error('API Key 无效或已过期，请检查您的 API Key');
            } else if (response.status === 403) {
                throw new Error('访问被拒绝，请检查 API Key 权限');
            } else if (response.status === 404) {
                throw new Error('API 端点不存在，请检查配置的 URL 是否正确');
            } else if (response.status === 429) {
                throw new Error('请求频率过高，请稍后重试');
            } else if (response.status >= 500) {
                throw new Error(`服务器错误 (${response.status})，请稍后重试`);
            }

            throw new Error(errorMessage);
        }

        const data = await response.json();

        // 检查返回数据格式
        if (!data.data || !data.data.outputs) {
            console.error('API 返回数据格式:', data);
            throw new Error('API 返回数据格式不正确，请检查工作流配置');
        }

        console.log('API 调用成功');
        return data.data.outputs;

    } catch (error) {
        clearTimeout(timeoutId);

        if (error.name === 'AbortError') {
            throw new Error(`请求超时 (${timeout/1000}秒)，请检查网络连接或稍后重试`);
        }

        if (error.name === 'TypeError' && error.message.includes('fetch')) {
            throw new Error('网络连接失败，请检查网络连接和 API 端点是否可访问');
        }

        throw error;
    }
}

// 显示结果
function displayResult(data) {
    currentConfigData = data;
    
    // 显示需求总结
    if (data.response_text) {
        elements.summaryContent.textContent = data.response_text;
    }
    
    // 显示配置清单
    if (data.config_list) {
        displayConfigList(data.config_list);
    }
    
    // 显示结果区域
    elements.resultSection.classList.remove('hidden');
    
    // 滚动到结果区域
    elements.resultSection.scrollIntoView({ behavior: 'smooth' });
}

// 显示配置清单
function displayConfigList(configList) {
    // 显示基本信息
    elements.configId.textContent = `配置ID: ${configList.config_id}`;
    elements.configTime.textContent = `生成时间: ${formatDateTime(configList.created_at)}`;
    elements.totalItems.textContent = `共 ${configList.total_items} 项服务`;
    
    // 显示配置项
    displayConfigItems(configList.items);
    
    // 显示汇总信息
    displayConfigSummary(configList);
}

// 格式化日期时间
function formatDateTime(dateString) {
    try {
        const date = new Date(dateString);
        return date.toLocaleString('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        });
    } catch (e) {
        return dateString;
    }
}

// 切换分类
function switchCategory(category) {
    currentCategory = category;

    // 更新标签状态
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    // 重新显示配置项
    if (currentConfigData && currentConfigData.config_list) {
        displayConfigItems(currentConfigData.config_list.items);
    }
}

// 显示配置项
function displayConfigItems(items) {
    // 过滤项目
    const filteredItems = currentCategory === 'all'
        ? items
        : items.filter(item => item.category === currentCategory);

    // 生成 HTML
    const html = filteredItems.map(item => createConfigItemHTML(item)).join('');
    elements.configItems.innerHTML = html;
}

// 创建配置项 HTML
function createConfigItemHTML(item) {
    const iconMap = {
        compute: 'fas fa-server',
        storage: 'fas fa-database',
        network: 'fas fa-network-wired',
        security: 'fas fa-shield-alt'
    };

    const autoAddedBadge = item.auto_added
        ? '<span class="auto-added-badge">自动添加</span>'
        : '';

    const reasonText = item.reason
        ? `<div class="reason-text">说明: ${item.reason}</div>`
        : '';

    return `
        <div class="config-item ${item.auto_added ? 'auto-added' : ''}" data-category="${item.category}">
            ${autoAddedBadge}
            <div class="config-item-header">
                <div class="service-info">
                    <div class="service-icon ${item.category}">
                        <i class="${iconMap[item.category] || 'fas fa-cog'}"></i>
                    </div>
                    <div class="service-name">${item.service_display_name}</div>
                </div>
                <div class="quantity-badge">×${item.quantity}</div>
            </div>
            <div class="spec-info">
                <div class="spec-name">${item.spec_display_name}</div>
                <div class="properties-text">${item.properties_text || ''}</div>
            </div>
            ${reasonText}
        </div>
    `;
}

// 显示配置汇总
function displayConfigSummary(configList) {
    const summary = configList.summary || {};
    const categorizedSummary = configList.categorized_summary || {};

    const summaryItems = [
        {
            label: '云服务器总数',
            value: summary.total_ecs || 0,
            unit: '台'
        },
        {
            label: '存储总容量',
            value: summary.total_storage_capacity || 0,
            unit: 'GB'
        },
        {
            label: '计算服务',
            value: categorizedSummary.compute?.count || 0,
            unit: '项'
        },
        {
            label: '存储服务',
            value: categorizedSummary.storage?.count || 0,
            unit: '项'
        },
        {
            label: '网络服务',
            value: categorizedSummary.network?.count || 0,
            unit: '项'
        },
        {
            label: '安全服务',
            value: categorizedSummary.security?.count || 0,
            unit: '项'
        }
    ];

    const summaryHTML = `
        <h4 style="margin-bottom: 20px; color: var(--text-primary);">
            <i class="fas fa-chart-bar" style="color: var(--primary-color); margin-right: 10px;"></i>
            配置汇总统计
        </h4>
        <div class="summary-grid">
            ${summaryItems.map(item => `
                <div class="summary-item">
                    <div class="summary-value">${formatNumber(item.value)}</div>
                    <div class="summary-label">${item.label} (${item.unit})</div>
                </div>
            `).join('')}
        </div>
    `;

    elements.configSummary.innerHTML = summaryHTML;
}

// 格式化数字
function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// 导出配置清单 (可选功能)
function exportConfig() {
    if (!currentConfigData || !currentConfigData.config_list) {
        showError('没有可导出的配置数据');
        return;
    }

    const configList = currentConfigData.config_list;
    const exportData = {
        config_id: configList.config_id,
        created_at: configList.created_at,
        summary: currentConfigData.response_text,
        items: configList.items.map(item => ({
            service: item.service_display_name,
            spec: item.spec_display_name,
            quantity: item.quantity,
            category: item.category,
            properties: item.properties_text,
            auto_added: item.auto_added,
            reason: item.reason
        })),
        summary_stats: configList.summary
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
        type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cloud-config-${configList.config_id}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// 添加导出按钮到页面 (如果需要)
function addExportButton() {
    const exportBtn = document.createElement('button');
    exportBtn.innerHTML = '<i class="fas fa-download"></i> 导出配置';
    exportBtn.className = 'export-btn';
    exportBtn.style.cssText = `
        margin-top: 20px;
        padding: 10px 20px;
        background: var(--secondary-gradient);
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        transition: var(--transition);
    `;
    exportBtn.addEventListener('click', exportConfig);

    // 添加到配置汇总区域
    elements.configSummary.appendChild(exportBtn);
}
