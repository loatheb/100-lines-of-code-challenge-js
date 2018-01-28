const fs = require('fs')
const childProcess = require('child_process')

const modulesPath = 'node_modules'

function remove(pkg) {
  if (!fs.existsSync(modulesPath)) return
  if (!fs.existsSync(`${modulesPath}/${pkg}`)) return
  childProcess.exec(`rm -rf ${modulesPath}/${pkg}`)
}

module.exports = remove
