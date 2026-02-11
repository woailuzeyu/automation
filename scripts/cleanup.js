// 清理临时文件和目录
import fs from 'fs'
import path from 'path'

const tempDirs = [
  'C:\\Users\\49089\\AppData\\Local\\Temp',
  'C:\\Users\\49089\\AppData\\Local\\Temp\\claude'
]

let totalSize = 0
let deletedCount = 0

function formatSize(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(2)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function cleanDirectory(dir, pattern = '*') {
  try {
    const files = fs.readdirSync(dir)
    const glob = new RegExp(`^${pattern.replace('*', '.*')}$`)

    files.forEach(file => {
      const filePath = path.join(dir, file)
      try {
        const stats = fs.statSync(filePath)

        if (stats.isDirectory()) {
          cleanDirectory(filePath, pattern)
        } else if (glob.test(file)) {
          const size = stats.size
          fs.unlinkSync(filePath)
          totalSize += size
          deletedCount++
        }
      } catch (err) {
        // 跳过无法删除的文件
      }
    })
  } catch (err) {
    console.log(`跳过目录: ${dir}`)
  }
}

console.log('🧹 清理临时文件...\n')

tempDirs.forEach(dir => {
  console.log(`清理: ${dir}`)
  cleanDirectory(dir)
})

console.log(`\n✓ 清理完成!`)
console.log(`  删除文件数: ${deletedCount}`)
console.log(`  释放空间: ${formatSize(totalSize)}`)
