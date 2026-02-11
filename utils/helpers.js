// 通用工具函数

// 延迟执行
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

// 带重试的异步操作
export async function retry(fn, maxRetries = 3, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn()
    } catch (error) {
      if (i === maxRetries - 1) throw error
      console.log(`重试 ${i + 1}/${maxRetries}...`)
      await sleep(delay)
    }
  }
}

// 执行命令并返回结果
export function exec(command) {
  return new Promise((resolve, reject) => {
    const { exec } = require('child_process')
    exec(command, (error, stdout, stderr) => {
      if (error) reject({ error, stderr })
      else resolve(stdout.trim())
    })
  })
}

// 获取文件大小（格式化）
export function getFileSize(filePath) {
  const stats = require('fs').statSync(filePath)
  const size = stats.size

  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(2)} KB`
  if (size < 1024 * 1024 * 1024) return `${(size / (1024 * 1024)).toFixed(2)} MB`
  return `${(size / (1024 * 1024 * 1024)).toFixed(2)} GB`
}
