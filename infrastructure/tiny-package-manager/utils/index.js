const debug = require('./debug')('tnpm')

const registry = 'https://registry.npm.taobao.org/'

function dummy() {}

/**
 * TODO: use promise instead of callback, will use tiny-promise to refactor
 */
function get(url, successCb, errorCb = dummy) {
  const protocolReg = /^(?:([A-Za-z]+):)?/
  const protocol = protocolReg.exec(url)[1]
  return require(`${protocol}`).get(url, res => {
    const { statusCode } = res
    const contentType = res.headers['content-type']
  
    let error
    if (statusCode !== 200) {
      error = new Error(`Status Code: ${statusCode}`)
    } else if (!/^application\/json/.test(contentType)) {
      error = new TypeError(`Expected application/json but received ${contentType}`)
    }

    if (error) {
      throw error
      return res.resume()
    }

    res.setEncoding('utf8')
    let rawData = ''
    res.on('data', chunk => { rawData += chunk })
    res.on('end', () => {
      try {
        const parsedData = JSON.parse(rawData)
        return successCb(parsedData)
      } catch (e) {
        throw e
      }
    })
  }).on('error', (e) => {
    return errorCb(e)
  })
}

function install(package) {
  const url = `${registry}${package}/`
  debug('url', url)
  return get(url, installHelper)
}

function installHelper(res) {
  const {
    'dist-tags': {
      latest: v
    },
  } = res
  debug('version', v)

  const { [v]: result } = res.versions
  const { name, version, dist } = result
  const { tarball } = dist
  debug('\nname', name, '\nversion', version, '\ntarball', tarball)

  console.log(`Installing ${name}@${version} ...`)
  return get(tarball, function (res) {
    console.log(res)
  })
}

function remove(package) {

}

module.exports = {
  get,
  remove,
  install,
}