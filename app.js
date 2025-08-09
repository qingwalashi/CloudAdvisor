'use strict';

// 内置示例：默认打开页面时展示
const DEFAULT_EXAMPLE = {
  question: '2 个应用系统，共13台 8C16G 云服务器，配置系统盘 140G，数据盘 180G，分别配置 30M 出口带宽',
  outputs: {
    response_text: `🤖 AI解析: 2个应用系统，共13台8C16G的云服务器，配置140G系统盘和180G数据盘，每个应用系统配置1个30M带宽的弹性公网IP和1个30M带宽的负载均衡SLB。配置1台4C8G的堡垒机和1台4C8G的主机安全服务，1台60M带宽的出口防火墙和1台60M带宽的WAF。

根据您的需求，我为您推荐以下云服务配置：

💻 计算服务:
• 云服务器ECS - 8核16GB × 13

💾 存储服务:
• 系统盘 - 150GB HDD高速云盘 × 13
• 数据盘 - 200GB HDD高速云盘 × 13

🌐 网络服务:
• 弹性公网IP - 50M带宽 × 2
• 负载均衡SLB - 50M带宽 × 2

🔒 安全服务:
• 出口防火墙 - 100M带宽 × 1
• WAF - 100M带宽 × 1
• 堡垒机 - 10台服务器授权×1 + 1台服务器授权×3
• 主机安全 - 10台服务器授权×1 + 1台服务器授权×3

📊 配置汇总:
• 云服务器总数: 13台
• 存储总容量: 4550GB
  存储明细: 系统盘1950GB, 数据盘2600GB
• 网络服务: 弹性公网IP2项, 负载均衡SLB2项
• 安全服务: 出口防火墙1项, WAF1项, 堡垒机4项, 主机安全4项`,
    config_list: {
      config_id: 'CONFIG-20250809153617',
      created_at: '2025-08-09T15:36:17.481920',
      total_items: 11,
      items: [
        {
          service_name: 'ecs',
          service_display_name: '云服务器ECS',
          spec_name: '8C16G',
          spec_display_name: '8核16GB',
          quantity: 13,
          auto_added: false,
          reason: '',
          category: 'compute',
          properties_text: '环境: 生产环境, 服务器角色: 应用服务器'
        },
        {
          service_name: 'system_disk',
          service_display_name: '系统盘',
          spec_name: '150GB',
          spec_display_name: '150GB HDD高速云盘',
          quantity: 13,
          auto_added: false,
          reason: '已调整为标准规格150GB',
          category: 'storage',
          properties_text: '总容量: 1950GB, 容量: 150GB'
        },
        {
          service_name: 'data_disk',
          service_display_name: '数据盘',
          spec_name: '200GB',
          spec_display_name: '200GB HDD高速云盘',
          quantity: 13,
          auto_added: false,
          reason: '已调整为标准规格200GB',
          category: 'storage',
          properties_text: '总容量: 2600GB, 容量: 200GB'
        },
        {
          service_name: 'eip',
          service_display_name: '弹性公网IP',
          spec_name: '50M',
          spec_display_name: '50M带宽',
          quantity: 2,
          auto_added: false,
          reason: '已调整为标准规格50M',
          category: 'network',
          properties_text: '用途: 应用系统互联网访问, 带宽: 50M'
        },
        {
          service_name: 'slb',
          service_display_name: '负载均衡SLB',
          spec_name: '50M',
          spec_display_name: '50M带宽',
          quantity: 2,
          auto_added: false,
          reason: '已调整为标准规格50M',
          category: 'network',
          properties_text: '用途: 应用系统负载均衡, 带宽: 50M'
        },
        {
          service_name: 'firewall',
          service_display_name: '出口防火墙',
          spec_name: '100M',
          spec_display_name: '100M带宽',
          quantity: 1,
          auto_added: false,
          reason: '已调整为标准规格100M',
          category: 'security',
          properties_text: '防护范围: 覆盖所有ECS云服务器, 带宽: 100M'
        },
        {
          service_name: 'waf',
          service_display_name: 'WAF',
          spec_name: '100M',
          spec_display_name: '100M带宽',
          quantity: 1,
          auto_added: false,
          reason: '已调整为标准规格100M',
          category: 'security',
          properties_text: '防护范围: 覆盖所有ECS云服务器, 带宽: 100M'
        },
        {
          service_name: 'bastion_host',
          service_display_name: '堡垒机',
          spec_name: 'license_10',
          spec_display_name: '10台服务器授权',
          quantity: 1,
          auto_added: true,
          reason: '等保要求，运维安全审计要求',
          category: 'security',
          properties_text: '最大服务器数: 10台, 覆盖服务器数: 10台'
        },
        {
          service_name: 'bastion_host',
          service_display_name: '堡垒机',
          spec_name: 'license_1',
          spec_display_name: '1台服务器授权',
          quantity: 3,
          auto_added: true,
          reason: '等保要求，运维安全审计要求',
          category: 'security',
          properties_text: '最大服务器数: 1台, 覆盖服务器数: 3台'
        },
        {
          service_name: 'host_security',
          service_display_name: '主机安全',
          spec_name: 'license_10',
          spec_display_name: '10台服务器授权',
          quantity: 1,
          auto_added: true,
          reason: '等保要求，主机安全防护要求',
          category: 'security',
          properties_text: '最大服务器数: 10台, 覆盖服务器数: 10台'
        },
        {
          service_name: 'host_security',
          service_display_name: '主机安全',
          spec_name: 'license_1',
          spec_display_name: '1台服务器授权',
          quantity: 3,
          auto_added: true,
          reason: '等保要求，主机安全防护要求',
          category: 'security',
          properties_text: '最大服务器数: 1台, 覆盖服务器数: 3台'
        }
      ],
      categorized_summary: {
        compute: { count: 1, total_quantity: 13 },
        storage: { count: 2, total_capacity: 4550, total_quantity: 26 },
        network: { count: 2, total_quantity: 4 },
        security: { count: 6, total_quantity: 10 }
      },
      summary: { total_ecs: 13, total_storage_capacity: 4550 }
    }
  }
};

// Cache DOM elements
const elements = {
  // Header metas
  apiEndpoint: document.getElementById('apiEndpoint'),
  authType: document.getElementById('authType'),
  // Removed steps
  // Modal & inputs
  apiKey: document.getElementById('apiKey'),
  workflowId: document.getElementById('workflowId'),
  customBaseUrl: document.getElementById('customBaseUrl'),
  toggleApiKey: document.getElementById('toggleApiKey'),
  openSettings: document.getElementById('openSettings'),
  settingsModal: document.getElementById('settingsModal'),
  closeSettings: document.getElementById('closeSettings'),
  saveSettings: document.getElementById('saveSettings'),
  // 动态规则弹窗相关
  openRules: document.getElementById('openRules'),
  rulesModal: document.getElementById('rulesModal'),
  closeRules: document.getElementById('closeRules'),
  rulesTableBtn: document.getElementById('rulesTableBtn'),
  rulesJsonBtn: document.getElementById('rulesJsonBtn'),
  rulesTableSection: document.getElementById('rulesTableSection'),
  rulesJsonSection: document.getElementById('rulesJsonSection'),
  rulesTableBody: document.getElementById('rulesTableBody'),
  rulesJsonText: document.getElementById('rulesJsonText'),
  rulesServiceFilter: document.getElementById('rulesServiceFilter'),
  rulesFilterWrap: document.getElementById('rulesFilterWrap'),
  // Inputs & actions
  userRequirement: document.getElementById('userRequirement'),
  suggestionsContainer: document.getElementById('suggestionsContainer'),
  submitBtn: document.getElementById('submitBtn'),
  // Results
  summaryContent: document.getElementById('summaryContent'),
  cardViewBtn: document.getElementById('cardViewBtn'),
  tableViewBtn: document.getElementById('tableViewBtn'),
  exportExcelBtn: document.getElementById('exportExcelBtn'),
  configId: document.getElementById('configId'),
  configTime: document.getElementById('configTime'),
  totalItems: document.getElementById('totalItems'),
  configItems: document.getElementById('configItems'),
  configTableContainer: document.getElementById('configTableContainer'),
  configTableBody: document.getElementById('configTableBody'),
  configSummary: document.getElementById('configSummary'),
  // Toast
  errorMessage: document.getElementById('errorMessage'),
  errorText: document.getElementById('errorText'),
  closeError: document.getElementById('closeError'),
};

let appConfig = null;
let currentConfigData = null;
let currentCategory = 'all';
let dynamicRules = null;
let rulesCurrentService = 'all';

// Boot
window.addEventListener('DOMContentLoaded', async () => {
  try {
    await loadAppConfig();
    initializeEventListeners();
    loadSavedConfig();
    updateConfigDisplay();
    // 默认示例：预填问题并直接渲染示例结果
    if (elements.userRequirement) elements.userRequirement.value = `示例：${DEFAULT_EXAMPLE.question}`;
    displayResult(DEFAULT_EXAMPLE.outputs);
    // 预加载动态规则（非阻塞）
    preloadDynamicRules();
  } catch (error) {
    console.error('初始化失败:', error);
    showError('配置文件加载失败: ' + error.message);
  }
});

async function preloadDynamicRules() {
  try {
    dynamicRules = await fetchDynamicRules();
  } catch (e) {
    // 不弹toast，直到用户打开弹窗再提示
    console.warn('预加载动态规则失败', e);
  }
}

async function fetchDynamicRules() {
  const resp = await fetch('./dynamic_rules.json', { cache: 'no-store' });
  if (!resp.ok) throw new Error(`无法加载 dynamic_rules.json (HTTP ${resp.status})`);
  return resp.json();
}

function populateRulesServiceFilter() {
  const select = elements.rulesServiceFilter;
  if (!select || !dynamicRules) return;
  const serviceTypes = dynamicRules.service_types || {};
  const options = ['<option value="all">全部</option>']
    .concat(Object.keys(serviceTypes).map((k) => `<option value="${escapeHtml(k)}">${escapeHtml(serviceTypes[k]?.name || k)}</option>`));
  select.innerHTML = options.join('');
  select.value = rulesCurrentService || 'all';
}

function renderRulesJsonView() {
  if (!dynamicRules) return;
  try {
    elements.rulesJsonText.textContent = JSON.stringify(dynamicRules, null, 2);
  } catch (_) {
    elements.rulesJsonText.textContent = '[无法格式化 JSON]';
  }
}

function renderRulesTableView() {
  if (!dynamicRules) return;
  const serviceTypes = dynamicRules.service_types || {};
  const rows = [];
  const serviceEntries = Object.entries(serviceTypes).filter(([key]) => rulesCurrentService === 'all' || key === rulesCurrentService);
  for (const [serviceKey, service] of serviceEntries) {
    const baseCols = {
      name: service.name || serviceKey,
      category: service.category || '',
    };

    if (Array.isArray(service.specs) && service.specs.length > 0) {
      for (const spec of service.specs) {
        rows.push({
          ...baseCols,
          specName: spec.display || '-',
        });
      }
    } else if (Array.isArray(service.bandwidth_options)) {
      const options = service.bandwidth_options.map((n) => `${n}M`).join('/');
      rows.push({
        ...baseCols,
        specName: service.recommended ? `带宽（推荐）：${options}` : `带宽：${options}`,
      });
    } else if (service.default_size || service.max_size || service.increment || service.min_size) {
      const parts = [];
      if (service.default_size) parts.push(`默认${service.default_size}GB`);
      if (service.min_size) parts.push(`最小${service.min_size}GB`);
      if (service.max_size) parts.push(`最大${service.max_size}GB`);
      if (service.increment) parts.push(`步长${service.increment}GB`);
      if (service.max_per_server) parts.push(`每台最多${service.max_per_server}`);
      rows.push({
        ...baseCols,
        specName: parts.join('，') || '-',
      });
    } else {
      rows.push({ ...baseCols, specName: '-' });
    }
  }

  elements.rulesTableBody.innerHTML = rows.map((r) => `
    <tr>
      <td>${escapeHtml(r.name)}</td>
      <td>${escapeHtml(getCategoryName(r.category))}</td>
      <td>${escapeHtml(r.specName)}</td>
    </tr>
  `).join('');
}

function summarizeSpecParams(spec) {
  const keys = Object.keys(spec).filter((k) => !['spec_name', 'display'].includes(k));
  if (keys.length === 0) return '-';
  const parts = [];
  for (const key of keys) {
    const val = spec[key];
    if (typeof val === 'number' || typeof val === 'string') parts.push(`${key}: ${val}`);
    else if (Array.isArray(val)) parts.push(`${key}: [${val.join(', ')}]`);
    else if (val && typeof val === 'object') parts.push(`${key}: {...}`);
  }
  return parts.join('，');
}

// Config loader
async function loadAppConfig() {
  try {
    const response = await fetch('./config.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    appConfig = await response.json();

    // Update header meta
    updateEndpointDisplay();
    if (elements.authType) elements.authType.textContent = appConfig.api?.authentication?.type === 'bearer' ? 'Bearer Token' : (appConfig.api?.authentication?.type || '');

    // Inject suggested questions
    updateSuggestedQuestions();
  } catch (error) {
    console.warn('加载配置失败，使用默认配置:', error);
    appConfig = getDefaultConfig();
    // 不再抛出错误，允许应用继续初始化
    updateEndpointDisplay();
    if (elements.authType) elements.authType.textContent = appConfig.api?.authentication?.type === 'bearer' ? 'Bearer Token' : (appConfig.api?.authentication?.type || '');
    updateSuggestedQuestions();
    showError('未能加载 config.json，已使用默认配置。建议通过本地 HTTP 服务访问页面。');
  }
}

function getDefaultConfig() {
  return {
    api: {
      baseUrl: 'https://api.dify.ai/v1/workflows/run',
      authentication: { type: 'bearer', headerName: 'Authorization', tokenPrefix: 'Bearer ' },
      headers: { 'Content-Type': 'application/json' },
      timeout: 60000,
      retryAttempts: 2,
      retryDelay: 1000,
    },
    workflow: { responseMode: 'blocking', userIdPrefix: 'web-user-' },
    ui: {
      suggestedQuestions: [
        '我需要2台云服务器，4核8GB配置',
        '搭建一个电商网站，需要高可用架构',
        '开发环境需要MySQL数据库和应用服务器',
      ],
    },
    features: { saveApiKey: true, autoSaveConfig: true, exportConfig: true, showAdvancedOptions: false },
  };
}

function updateConfigDisplay() {
  if (!appConfig) return;
  // 取消高级选项展开逻辑，仅保留展示端点与认证方式
  updateEndpointDisplay();
  if (elements.authType) {
    elements.authType.textContent = appConfig.api?.authentication?.type === 'bearer' ? 'Bearer Token' : (appConfig.api?.authentication?.type || '');
  }
  updateAuthStatus();
}

function updateAuthStatus() {
  const badge = document.getElementById('authStatus');
  if (!badge) return;
  const apiKey = (elements.apiKey?.value || '').trim();
  const configured = apiKey && apiKey.length >= 10;
  badge.classList.toggle('configured', configured);
  badge.classList.toggle('missing', !configured);
  badge.innerHTML = configured
    ? '<i class="fa-solid fa-check"></i> 已配置'
    : '<i class="fa-solid fa-circle-exclamation"></i> 缺失';
}

function updateEndpointDisplay() {
  const custom = (elements.customBaseUrl?.value || '').trim();
  const url = custom || appConfig?.api?.baseUrl || 'https://api.dify.ai/v1/workflows/run';
  if (elements.apiEndpoint) elements.apiEndpoint.textContent = url;
}

function updateSuggestedQuestions() {
  const container = elements.suggestionsContainer;
  container.innerHTML = '';
  const list = appConfig?.ui?.suggestedQuestions || [];
  list.forEach((question) => {
    const btn = document.createElement('button');
    btn.className = 'suggestion-btn';
    btn.textContent = question;
    btn.addEventListener('click', () => (elements.userRequirement.value = question));
    container.appendChild(btn);
  });
}

// Events
function initializeEventListeners() {
  elements.toggleApiKey?.addEventListener('click', () => {
    const input = elements.apiKey;
    const icon = elements.toggleApiKey.querySelector('i');
    if (!input) return;
    if (input.type === 'password') { input.type = 'text'; icon.className = 'fa-regular fa-eye-slash'; }
    else { input.type = 'password'; icon.className = 'fa-regular fa-eye'; }
  });

  // Modal open/close/save
  elements.openSettings?.addEventListener('click', () => { prefillSettings(); elements.settingsModal?.classList.remove('hidden'); });
  elements.closeSettings?.addEventListener('click', () => elements.settingsModal?.classList.add('hidden'));
  elements.settingsModal?.addEventListener('click', (e) => { if (e.target?.getAttribute('data-close') === '1') elements.settingsModal?.classList.add('hidden'); });
  elements.saveSettings?.addEventListener('click', () => { saveConfig(); elements.settingsModal?.classList.add('hidden'); });

  // 动态规则弹窗打开/关闭
  elements.openRules?.addEventListener('click', async () => {
    try {
      if (!dynamicRules) dynamicRules = await fetchDynamicRules();
      rulesCurrentService = 'all';
      populateRulesServiceFilter();
      switchRulesView('table');
      renderRulesTableView();
      renderRulesJsonView();
      elements.rulesModal?.classList.remove('hidden');
      // 禁止背景滚动
      document.body.style.overflow = 'hidden';
    } catch (e) {
      showError(`加载动态规则失败：${e.message || e}`);
    }
  });
  elements.closeRules?.addEventListener('click', () => { elements.rulesModal?.classList.add('hidden'); document.body.style.overflow = ''; });
  elements.rulesModal?.addEventListener('click', (e) => { if (e.target?.getAttribute('data-close') === '1') { elements.rulesModal?.classList.add('hidden'); document.body.style.overflow = ''; } });

  // 规则视图切换
  elements.rulesTableBtn?.addEventListener('click', () => { switchRulesView('table'); renderRulesTableView(); });
  elements.rulesJsonBtn?.addEventListener('click', () => { switchRulesView('json'); renderRulesJsonView(); });

  // 服务筛选
  elements.rulesServiceFilter?.addEventListener('change', (e) => {
    rulesCurrentService = e.target.value || 'all';
    renderRulesTableView();
  });

  // Submit
  elements.submitBtn?.addEventListener('click', handleSubmit);

  // Tabs and views
  document.querySelectorAll('.tab-btn').forEach((btn) => btn.addEventListener('click', () => switchCategory(btn.dataset.category)));
  elements.cardViewBtn?.addEventListener('click', switchToCardView);
  elements.tableViewBtn?.addEventListener('click', switchToTableView);
  elements.exportExcelBtn?.addEventListener('click', exportToExcel);

  // Toast close
  elements.closeError?.addEventListener('click', hideError);

  if (appConfig?.features?.saveApiKey) {
    ['apiKey', 'workflowId', 'customBaseUrl'].forEach((key) => elements[key]?.addEventListener('input', () => { saveConfig(); if (key === 'customBaseUrl') updateEndpointDisplay(); if (key === 'apiKey') updateAuthStatus(); }));
  }
}

function prefillSettings() {
  try {
    const raw = localStorage.getItem('cloudAdvisorConfig');
    if (raw) {
      const cfg = JSON.parse(raw);
      if (elements.apiKey) elements.apiKey.value = cfg.apiKey ?? elements.apiKey.value ?? '';
      if (elements.workflowId) elements.workflowId.value = cfg.workflowId ?? elements.workflowId.value ?? '';
      if (elements.customBaseUrl) elements.customBaseUrl.value = cfg.customBaseUrl ?? elements.customBaseUrl.value ?? '';
    }
  } catch (_) {
    // ignore parse errors
  }
}

function saveConfig() {
  if (!appConfig?.features?.saveApiKey) return;
  const config = {
    apiKey: elements.apiKey.value,
    workflowId: elements.workflowId.value,
    customBaseUrl: elements.customBaseUrl.value,
  };
  localStorage.setItem('cloudAdvisorConfig', JSON.stringify(config));
  updateEndpointDisplay();
  updateAuthStatus();
}

function loadSavedConfig() {
  if (!appConfig?.features?.saveApiKey) return;
  const raw = localStorage.getItem('cloudAdvisorConfig');
  if (raw) {
    try {
      const cfg = JSON.parse(raw);
      elements.apiKey.value = cfg.apiKey || '';
      elements.workflowId.value = cfg.workflowId || '';
      elements.customBaseUrl.value = cfg.customBaseUrl || '';
    } catch (_) {}
  }
  updateEndpointDisplay();
  updateAuthStatus();
}

// Error Toast
function showError(message) {
  elements.errorText.innerHTML = message;
  elements.errorMessage.classList.remove('hidden');
  setTimeout(hideError, 8000);
}
function hideError() {
  elements.errorMessage.classList.add('hidden');
}

// Steps & loading
function markStepActive(stepIndex1Based) {
  elements.steps.forEach((el, idx) => {
    el.classList.toggle('active', idx === stepIndex1Based - 1);
  });
}
function showLoading() {
  if (!elements.submitBtn) return;
  elements.submitBtn.disabled = true;
  elements.submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 正在生成...';
}
function hideLoading() {
  if (!elements.submitBtn) return;
  elements.submitBtn.disabled = false;
  elements.submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> 生成配置清单';
}

// Submit
async function handleSubmit() {
  try {
    const apiKey = (elements.apiKey?.value || '').trim();
    const requirement = (elements.userRequirement?.value || '').trim();

    if (!apiKey) return showError('请输入 API Key');
    if (!requirement) return showError('请输入您的云服务需求');
    if (apiKey.length < 10) return showError('API Key 格式不正确，请检查输入');

    showLoading();
    const outputs = await callDifyAPI(apiKey, requirement);
    displayResult(outputs);
    if (appConfig?.features?.autoSaveConfig) saveConfig();
  } catch (error) {
    console.error('API 调用失败:', error);
    const message = error?.message || '请求失败，请稍后重试';
    showError('<div class="error-main">' + message + '</div>');
  } finally {
    hideLoading();
  }
}

async function callDifyAPI(apiKey, requirement) {
  if (!appConfig) throw new Error('应用配置未加载');
  const maxRetries = appConfig.api.retryAttempts ?? 2;
  const retryDelay = appConfig.api.retryDelay ?? 1000;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await performAPICall(apiKey, requirement, attempt);
    } catch (error) {
      if (attempt === maxRetries) throw error;
      if (String(error?.message || '').match(/401|403|API Key|数据格式/)) throw error;
      await new Promise((r) => setTimeout(r, retryDelay * (attempt + 1)));
    }
  }
}

async function performAPICall(apiKey, requirement, attempt = 0) {
  const workflowId = elements.workflowId.value.trim();
  const customBaseUrl = elements.customBaseUrl.value.trim();

  let apiUrl = customBaseUrl || appConfig.api.baseUrl;
  if (workflowId) {
    if (apiUrl.includes('/workflows/run')) apiUrl = apiUrl.replace('/workflows/run', `/workflows/${workflowId}/run`);
    else apiUrl = `${apiUrl}/${workflowId}/run`;
  }

  const requestBody = {
    inputs: { user_requirement: requirement },
    response_mode: appConfig.workflow?.responseMode || 'blocking',
    user: (appConfig.workflow?.userIdPrefix || 'web-user-') + Date.now(),
  };

  const headers = { ...(appConfig.api?.headers || {}) };
  const auth = appConfig.api?.authentication || {};
  if (auth.type === 'bearer') headers[auth.headerName || 'Authorization'] = (auth.tokenPrefix || '') + apiKey;
  else headers[auth.headerName || 'Authorization'] = apiKey;

  const baseTimeout = appConfig.api?.timeout || 60000;
  const timeout = baseTimeout + attempt * 10000;

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const resp = await fetch(apiUrl, {
      method: 'POST',
      headers,
      body: JSON.stringify(requestBody),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!resp.ok) {
      let errorText = `HTTP ${resp.status}: ${resp.statusText}`;
      try {
        const errJson = await resp.json();
        if (errJson?.message) errorText = errJson.message;
      } catch (_) {}

      if (resp.status === 401) throw new Error('API Key 无效或已过期，请检查您的 API Key');
      if (resp.status === 403) throw new Error('访问被拒绝，请检查 API Key 权限');
      if (resp.status === 404) throw new Error('API 端点不存在，请检查配置的 URL 是否正确');
      if (resp.status === 429) throw new Error('请求频率过高，请稍后重试');
      if (resp.status >= 500) throw new Error(`服务器错误 (${resp.status})，请稍后重试`);
      throw new Error(errorText);
    }

    const data = await resp.json();
    if (!data?.data?.outputs) throw new Error('API 返回数据格式不正确，请检查工作流配置');

    return data.data.outputs;
  } catch (error) {
    clearTimeout(timeoutId);
    if (error?.name === 'AbortError') throw new Error(`请求超时 (${Math.round(timeout/1000)} 秒)，请检查网络连接或稍后重试`);
    if (error?.name === 'TypeError' && String(error.message).includes('fetch')) {
      throw new Error('网络连接失败，请检查网络连接和 API 端点是否可访问');
    }
    throw error;
  }
}

// Rendering
function displayResult(outputs) {
  currentConfigData = outputs;
  if (elements.modelFeedback) {
    elements.modelFeedback.textContent = outputs.response_text ? '已获取模型摘要与配置建议。' : '已完成调用。';
  }
  if (outputs.response_text) {
    // 保留换行显示：index.html 使用 whitespace-pre-line
    elements.summaryContent.textContent = outputs.response_text;
  }
  if (outputs.config_list) {
    displayConfigList(outputs.config_list);
  }
}

function displayConfigList(configList) {
  if (elements.configId) elements.configId.textContent = `配置ID: ${configList.config_id || '-'}`;
  if (elements.configTime) elements.configTime.textContent = `生成时间: ${formatDateTime(configList.created_at || new Date().toISOString())}`;
  if (elements.totalItems) elements.totalItems.textContent = `共 ${configList.total_items || (configList.items?.length || 0)} 项服务`;

  displayConfigItems(configList.items || []);
  displayConfigSummary(configList);
}

function formatDateTime(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleString('zh-CN', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  } catch (_) { return iso; }
}

function switchCategory(category) {
  currentCategory = category;
  document.querySelectorAll('.tab-btn').forEach((btn) => btn.classList.toggle('active', btn.dataset.category === category));
  if (currentConfigData?.config_list) displayConfigItems(currentConfigData.config_list.items || []);
}

function displayConfigItems(items) {
  const filtered = currentCategory === 'all' ? items : items.filter((it) => it.category === currentCategory);
  elements.configItems.innerHTML = filtered.map(createConfigItemHTML).join('');
  displayConfigTable(filtered);
}

function displayConfigTable(items) {
  elements.configTableBody.innerHTML = items.map((item) => `
    <tr>
      <td>${getCategoryName(item.category)}</td>
      <td>${escapeHtml(item.service_display_name)}</td>
      <td>${escapeHtml(item.spec_display_name)}</td>
      <td>${Number(item.quantity) || 0}</td>
      <td>${escapeHtml(item.properties_text || '')}</td>
      <td><span class="reason-text">${escapeHtml(item.reason || '')}</span></td>
      <td>${item.auto_added ? '是' : '否'}</td>
    </tr>
  `).join('');
}

function getCategoryName(category) {
  const map = { compute: '计算服务', storage: '存储服务', network: '网络服务', security: '安全服务' };
  return map[category] || category || '';
}

function createConfigItemHTML(item) {
  const iconClass = {
    compute: 'fa-solid fa-server',
    storage: 'fa-solid fa-database',
    network: 'fa-solid fa-network-wired',
    security: 'fa-solid fa-shield-halved',
  }[item.category] || 'fa-solid fa-cog';

  const iconBG = item.category || 'compute';

  return `
    <div class="config-item" data-category="${escapeHtml(item.category || '')}">
      <div class="head">
        <div class="service">
          <div class="icon ${iconBG}"><i class="${iconClass}"></i></div>
          <div class="name">${escapeHtml(item.service_display_name || '')}</div>
        </div>
        <div class="qty">×${Number(item.quantity) || 0}</div>
      </div>
      <div class="spec">
        <div>${escapeHtml(item.spec_display_name || '')}</div>
        <div>${escapeHtml(item.properties_text || '')}</div>
      </div>
      ${item.reason ? `<div class="reason">说明：${escapeHtml(item.reason)}</div>` : ''}
    </div>
  `;
}

function displayConfigSummary(configList) {
  const summary = configList.summary || {};
  const cat = configList.categorized_summary || {};

  const items = [
    { label: '云服务器总数 (台)', value: summary.total_ecs || 0 },
    { label: '存储总容量 (GB)', value: summary.total_storage_capacity || 0 },
    { label: '计算服务 (项)', value: cat.compute?.count || 0 },
    { label: '存储服务 (项)', value: cat.storage?.count || 0 },
    { label: '网络服务 (项)', value: cat.network?.count || 0 },
    { label: '安全服务 (项)', value: cat.security?.count || 0 },
  ];

  const html = items.map((it) => `
    <div class="summary-item">
      <div class="value">${formatNumber(it.value)}</div>
      <div class="label">${it.label}</div>
    </div>
  `).join('');

  // 新的独立面板
  const panel = document.getElementById('configSummaryPanel');
  if (panel) panel.innerHTML = html;
  // 兼容旧位置（若仍存在）
  if (elements.configSummary) elements.configSummary.innerHTML = html;
}

function formatNumber(n) {
  if (typeof n !== 'number') n = Number(n) || 0;
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K';
  return String(n);
}

function switchToCardView() {
  elements.cardViewBtn.classList.add('active');
  elements.tableViewBtn.classList.remove('active');
  elements.configItems.classList.remove('hidden');
  elements.configTableContainer.classList.add('hidden');
}

function switchToTableView() {
  elements.cardViewBtn.classList.remove('active');
  elements.tableViewBtn.classList.add('active');
  elements.configItems.classList.add('hidden');
  elements.configTableContainer.classList.remove('hidden');
  elements.configTableContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function exportToExcel() {
  if (!currentConfigData?.config_list) return showError('没有可导出的配置数据');
  const items = currentConfigData.config_list.items || [];
  const data = items.map((it) => ({
    '服务类型': getCategoryName(it.category),
    '服务名称': it.service_display_name,
    '规格': it.spec_display_name,
    '数量': it.quantity,
    '属性': it.properties_text || '',
    '说明': it.reason || '',
    '自动添加': it.auto_added ? '是' : '否',
  }));
  const wb = XLSX.utils.book_new();
  const ws = XLSX.utils.json_to_sheet(data);
  XLSX.utils.book_append_sheet(wb, ws, '配置清单');
  const filename = `云服务配置清单-${currentConfigData.config_list.config_id || Date.now()}.xlsx`;
  XLSX.writeFile(wb, filename);
}

function switchRulesView(view) {
  const toTable = view === 'table';
  elements.rulesTableBtn?.classList.toggle('active', toTable);
  elements.rulesJsonBtn?.classList.toggle('active', !toTable);
  if (toTable) {
    elements.rulesTableSection?.classList.remove('hidden');
    elements.rulesJsonSection?.classList.add('hidden');
    elements.rulesFilterWrap?.classList.remove('hidden');
  } else {
    elements.rulesTableSection?.classList.add('hidden');
    elements.rulesJsonSection?.classList.remove('hidden');
    elements.rulesFilterWrap?.classList.add('hidden');
  }
}

// Utilities
function escapeHtml(input) {
  return String(input)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
} 