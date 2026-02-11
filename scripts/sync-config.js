// 同步全局配置文件到所有 AI 工具
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const sourceFile = 'C:\\Users\\49089\\.claude\\CLAUDE.md'
const targetFiles = [
  'C:\\Users\\49089\\.codex\\AGENTS.md',
  'C:\\Users\\49089\\.kiro\\steering\\global-conventions.md'
]

function syncConfig() {
  try {
    const content = fs.readFileSync(sourceFile, 'utf-8')

    targetFiles.forEach(target => {
      fs.writeFileSync(target, content, 'utf-8')
      console.log(`✓ 已同步到: ${path.basename(path.dirname(target))}/${path.basename(target)}`)
    })

    console.log('\n✓ 配置同步完成')
  } catch (error) {
    console.error('同步失败:', error.message)
    process.exit(1)
  }
}

syncConfig()
