/**
 * Lifecycle: install --> installHelper --> parser --> parserHelper
 * Because of this is a non based package so we don't use promise or fetch here.
 *
 * INSTALL: generate the fetch url and return the request with the callback
 * INSTALL_HELPER: get the package information and resolve the real url to fetch it.
 * PARSER: parse the fetched data from .taz to normal
 * PARSER_HELPER: write down to fake_node_modules
 */

const fs = require('fs')
const childProcess = require('child_process')
const debug = require('./debug')('tnpm')
const { get } = require('./request')

const registry = 'https://registry.npm.taobao.org/'
const modulesPath = 'node_modules'

function parserHelper(name, tgzName) {
  return childProcess.exec(`mv ${modulesPath}/package ${modulesPath}/${name} && rm ${tgzName}`)
}

function parser(name) {
  if (!fs.existsSync(modulesPath)) {
    fs.mkdirSync(modulesPath)
  }
  return function parserCb(tgzName) {
    return childProcess.exec(`tar -xf ./${tgzName} -C ${modulesPath}`, (error, stdout, stderr) => {
      if (error) return console.error(`exec error: ${error}`)
      if (stdout) console.log(`stdout: ${stdout}`)
      if (stderr) console.log(`stderr: ${stderr}`)
      return parserHelper(name, tgzName)
    })
  }
}

function installHelper(res) {
  const { 'dist-tags': { latest: v } } = res
  debug('version', v)

  const { [v]: result } = res.versions
  const { name, version, dist } = result
  const { tarball } = dist

  debug('name', name, '\nversion', version, '\ntarball', tarball)
  console.log(`Installing ${name}@${version} ...`)
  return get(tarball, parser(name))
}

function install(pkg) {
  const url = `${registry}${pkg}/`

  debug('url', url)
  return get(url, installHelper)
}

module.exports = install
