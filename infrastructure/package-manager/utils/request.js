const fs = require('fs')

function dummy() {}

function get(url, successCb, errorCb = dummy) {
  const protocolReg = /^(?:([A-Za-z]+):)?/
  const protocol = protocolReg.exec(url)[1]

  return require(`${protocol}`).get(url, (res) => {
    const { statusCode } = res

    if (statusCode === 302 || statusCode === 301) {
      const redirectUrl = res.headers.location
      return get(redirectUrl, successCb, errorCb)
    }

    const contentType = res.headers['content-type']

    if (statusCode !== 200) {
      throw new Error(`Status Code: ${statusCode}`)
    }

    if (/^application\/json/.test(contentType)) {
      let rawData = ''
      return res.on('data', (chunk) => { rawData += chunk })
        .on('end', () => {
          const parsedData = JSON.parse(rawData)
          return successCb(parsedData)
        })
    }

    const fileName = 'dummy.tgz'
    const file = fs.createWriteStream(fileName)
    return res.on('data', (chunk) => { file.write(chunk) })
      .on('end', () => {
        file.end()
        return successCb(fileName)
      })
  }).on('error', e => errorCb(e))
}

module.exports = {
  get,
}
