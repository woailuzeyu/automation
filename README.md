# 自动化脚本集合

个人自动化脚本，简化日常操作。

## 使用方式

```bash
# 进入目录
cd C:\Users\49089\automation

# 安装依赖（首次运行）
npm install

# 列出所有脚本
npm run list

# 运行具体脚本
npm run sync      # 同步配置文件
npm run cleanup   # 清理临时文件
```

## 已有脚本

| 脚本 | 功能 |
|------|------|
| `sync-config.js` | 同步全局配置到所有 AI 工具 |
| `cleanup.js` | 清理临时文件和缓存 |
| `list-scripts.js` | 列出所有可用脚本 |

## 添加新脚本

1. 在 `scripts/` 目录下创建新的 `.js` 文件
2. 在 `package.json` 的 `scripts` 中添加快捷命令
3. 运行 `npm run <命令名>`

## 工具函数

`utils/helpers.js` 提供了一些通用函数：

- `sleep(ms)` - 延迟执行
- `retry(fn, maxRetries, delay)` - 带重试的异步操作
- `exec(command)` - 执行 shell 命令
- `getFileSize(filePath)` - 获取文件大小

---

**目录**: `C:\Users\49089\automation`
