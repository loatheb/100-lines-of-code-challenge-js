const fs = require('fs')
const path = require('path')
const childProcess = require('child_process')

const modulesPath = 'node_modules'

function remove(package) {
  if (!fs.existsSync(modulesPath)) return
  if (!fs.existsSync(`${modulesPath}/${package}`)) return
  return childProcess.exec(`rm -rf ${modulesPath}/${package}`)
}

module.exports = remove
