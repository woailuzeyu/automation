// 列出所有可用的自动化脚本
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const scriptsDir = path.join(__dirname, 'scripts')
const packageJsonPath = path.join(__dirname, '..', 'package.json')

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

console.log('📦 自动化脚本列表\n')
console.log('运行方式: npm run <脚本名>\n')

Object.entries(packageJson.scripts).forEach(([name, script]) => {
  if (name !== 'list') {
    console.log(`  ${name.padEnd(12)} → ${script.replace('node scripts/', '')}`)
  }
})

// 列出 scripts 目录下的所有文件
console.log('\n📁 scripts 目录下的文件:')
const files = fs.readdirSync(scriptsDir).filter(f => f.endsWith('.js'))
files.forEach(file => {
  console.log(`  - ${file}`)
})

console.log('\n💡 提示: 在 scripts/ 目录下添加新的 .js 脚本，然后在 package.json 中注册即可')
