# 云需求顾问 - 智能云服务配置助手

这是一个基于 Dify 工作流的智能云服务配置助手系统，支持自然语言需求解析和自动配置清单生成。

## 功能特性

- 🌥️ **智能需求解析**: 使用大模型理解自然语言描述的云服务需求
- 📋 **自动配置生成**: 根据需求自动生成详细的云服务配置清单
- 🎨 **现代化界面**: 美观、响应式的用户界面设计
- 📊 **分类展示**: 按计算、存储、网络、安全等类别展示配置项
- ⚙️ **配置文件支持**: 通过 config.json 灵活配置 API 端点和认证方式
- 💾 **配置保存**: 自动保存 API 配置信息到本地存储
- 🔧 **高级选项**: 支持自定义 API 端点和工作流配置
- 📱 **移动适配**: 支持移动设备访问

## 使用方法

### 1. 配置系统

#### 配置文件设置
系统会自动加载 `config.json` 配置文件，包含：
- API 端点地址
- 认证方式配置
- 界面文本设置
- 功能开关等

#### API 配置
1. 打开页面后，系统会显示当前的 API 端点和认证方式
2. 在 "API 配置" 区域输入您的 API Key
3. 如果需要指定特定的工作流，可以输入工作流 ID（可选）
4. 点击 "高级选项" 可以自定义 API 端点（覆盖配置文件设置）

### 2. 输入需求

在 "需求输入" 区域描述您的云服务需求，例如：

- "我需要2台云服务器，4核8GB配置"
- "搭建一个电商网站，需要高可用架构"
- "2 个应用系统，共13台 8C16G 云服务器，配置系统盘 140G，数据盘 180G，分别配置 30M 出口带宽"

### 3. 生成配置

点击 "生成配置清单" 按钮，系统将：

1. 使用配置文件中的设置调用 API
2. 分析您的需求并生成详细总结
3. 提供完整的云服务配置清单

### 4. 查看结果

结果包含两部分：

- **需求分析总结**: AI 对您需求的理解和推荐说明
- **详细配置清单**: 按类别展示的具体服务配置，包括：
  - 💻 计算服务（云服务器等）
  - 💾 存储服务（系统盘、数据盘等）
  - 🌐 网络服务（公网IP、负载均衡等）
  - 🔒 安全服务（堡垒机、主机安全等）

## 配置文件说明

### config.json 结构

系统使用 `config.json` 文件进行配置，主要包含以下部分：

```json
{
  "api": {
    "baseUrl": "https://api.dify.ai/v1/workflows/run",
    "authentication": {
      "type": "bearer",
      "headerName": "Authorization",
      "tokenPrefix": "Bearer "
    },
    "headers": {
      "Content-Type": "application/json"
    },
    "timeout": 30000,
    "retryAttempts": 3
  },
  "workflow": {
    "defaultWorkflowId": "",
    "responseMode": "blocking",
    "userIdPrefix": "web-user-"
  },
  "ui": {
    "title": "云需求顾问",
    "subtitle": "智能的云服务配置助手系统...",
    "suggestedQuestions": [...],
    "placeholderText": "例如：..."
  },
  "features": {
    "saveApiKey": true,
    "autoSaveConfig": true,
    "exportConfig": true,
    "showAdvancedOptions": false
  }
}
```

### 配置项说明

#### API 配置 (api)
- `baseUrl`: API 端点地址
- `authentication.type`: 认证类型（bearer/basic/custom）
- `authentication.headerName`: 认证头名称
- `authentication.tokenPrefix`: Token 前缀
- `headers`: 默认请求头
- `timeout`: 请求超时时间（毫秒）

#### 工作流配置 (workflow)
- `defaultWorkflowId`: 默认工作流 ID
- `responseMode`: 响应模式（blocking/streaming）
- `userIdPrefix`: 用户 ID 前缀

#### 界面配置 (ui)
- `title`: 页面标题
- `subtitle`: 页面副标题
- `suggestedQuestions`: 建议问题列表
- `placeholderText`: 输入框占位符文本

#### 功能配置 (features)
- `saveApiKey`: 是否保存 API Key 到本地
- `autoSaveConfig`: 是否自动保存配置
- `exportConfig`: 是否启用导出功能
- `showAdvancedOptions`: 是否默认显示高级选项

## API 配置说明

### 支持的 API 端点

系统支持任何兼容的 API 端点，默认配置：
```
https://api.dify.ai/v1/workflows/run
```

### 请求格式

```json
{
  "inputs": {
    "user_requirement": "用户输入的需求描述"
  },
  "response_mode": "blocking",
  "user": "web-user-{timestamp}"
}
```

### 响应格式

期望的响应格式包含：

```json
{
  "data": {
    "outputs": {
      "response_text": "需求分析总结文本",
      "config_list": {
        "config_id": "配置ID",
        "created_at": "创建时间",
        "total_items": 11,
        "items": [
          {
            "service_name": "服务名称",
            "service_display_name": "显示名称",
            "spec_name": "规格名称",
            "spec_display_name": "规格显示名称",
            "quantity": 1,
            "auto_added": false,
            "reason": "选择理由",
            "category": "服务类别",
            "properties_text": "属性描述"
          }
        ],
        "categorized_summary": {
          "compute": {"count": 1, "total_quantity": 13},
          "storage": {"count": 2, "total_capacity": 4550},
          "network": {"count": 2, "total_quantity": 4},
          "security": {"count": 6, "total_quantity": 22}
        },
        "summary": {
          "total_ecs": 13,
          "total_storage_capacity": 4550
        }
      }
    }
  }
}
```

## 技术栈

- **前端**: HTML5 + CSS3 + 原生 JavaScript
- **样式**: 现代 CSS 特性（Grid、Flexbox、CSS 变量）
- **图标**: Font Awesome 6
- **API**: Dify 工作流 API

## 文件结构

```
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript 功能
├── config.json         # 配置文件
└── README.md           # 说明文档
```

## 部署说明

### 本地部署

1. 将所有文件放在同一目录下
2. 根据需要修改 `config.json` 配置文件
3. 使用 HTTP 服务器运行（不能直接用 file:// 协议，因为需要加载配置文件）

#### 使用 Python 启动本地服务器：
```bash
# Python 3
python -m http.server 8000

# 然后访问 http://localhost:8000
```

#### 使用 Node.js 启动本地服务器：
```bash
# 安装 http-server
npm install -g http-server

# 启动服务器
http-server -p 8000

# 然后访问 http://localhost:8000
```

### 生产部署

1. 将文件上传到 Web 服务器
2. 确保服务器支持静态文件服务
3. 配置 HTTPS（推荐，特别是处理 API Key 时）
4. 根据实际 API 端点修改 `config.json`

## 浏览器兼容性

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 注意事项

1. 需要有效的 Dify API Key 才能使用
2. API Key 会保存在浏览器本地存储中
3. 确保网络连接正常，能够访问 Dify API
4. 建议使用 HTTPS 协议访问页面以确保安全性

## 示例需求

以下是一些可以尝试的需求示例：

1. **基础需求**: "我需要2台云服务器，4核8GB配置"
2. **复杂架构**: "搭建一个电商网站，需要高可用架构，包括负载均衡、数据库集群"
3. **详细规格**: "2个应用系统，共13台8C16G云服务器，配置系统盘140G，数据盘180G，30M带宽"
4. **开发环境**: "开发环境需要MySQL数据库和应用服务器，支持10个开发人员同时使用"

## 故障排除



### 常见问题及解决方案

#### 1. 请求超时问题
**症状**: 显示 "请求超时，请检查网络连接或稍后重试"

**解决方案**:
- 检查网络连接是否稳定
- 尝试使用更简短的需求描述
- 在 `config.json` 中增加超时时间：
  ```json
  {
    "api": {
      "timeout": 90000
    }
  }
  ```
- 稍后重试，服务器可能暂时繁忙

#### 2. API Key 相关问题
**症状**: 401/403 错误或 "API Key 无效"

**解决方案**:
- 确认 API Key 是否正确复制
- 检查 API Key 是否有效且未过期
- 确认 API Key 有访问工作流的权限

#### 3. 网络连接问题
**症状**: "网络连接失败" 或 "无法连接到 API 端点"

**解决方案**:
- 检查网络连接
- 确认 API 端点地址是否正确
- 检查防火墙或代理设置
- 尝试在高级选项中使用不同的 API 端点

#### 4. 数据格式问题
**症状**: "API 返回数据格式不正确"

**解决方案**:
- 检查工作流配置是否正确
- 确认工作流 ID 是否有效
- 确认工作流输出格式符合预期
- 联系管理员检查工作流设置

#### 5. 配置文件问题
**症状**: "应用配置未加载" 或页面显示异常

**解决方案**:
- 确保使用 HTTP 服务器而非 file:// 协议
- 检查 `config.json` 格式是否正确
- 确认所有文件都在同一目录
- 查看浏览器控制台的错误信息

### 调试技巧

1. **查看控制台**: 打开浏览器开发者工具查看详细错误信息
2. **网络面板**: 检查 API 请求的详细信息和响应
3. **简化测试**: 使用简短的需求描述进行测试
4. **检查配置**: 确认 `config.json` 中的所有设置都正确

### 性能优化建议

1. **合理设置超时时间**: 根据网络环境调整 `timeout` 值
2. **启用重试机制**: 配置 `retryAttempts` 和 `retryDelay`
3. **简化需求描述**: 避免过于复杂的需求描述
4. **使用 HTTPS**: 在生产环境中使用 HTTPS 协议

如有其他问题，请查看浏览器开发者工具的控制台输出，或联系技术支持。
