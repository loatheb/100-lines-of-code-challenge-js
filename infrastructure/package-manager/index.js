#!/usr/bin/env node

const { install, remove } = require('./utils')

/**
 * Make the Event Viewer monitor tnpm
 */
process.title = 'tnpm'

/**
 * Make both `node index.js install ${package_name}` and `./index.js install ${package_name}` work well
 * TODO: link the script into .bin
 */
const [...args] = process.argv
const package = args.pop()
const cmd = args.pop()

switch(cmd) {
  case 'install': {
    return install(package)
  }
  case 'remove':
  case 'delete': {
    return remove(package)
  }
  default: {
    throw new Error(`Unknow cmd ${cmd}, expect install, remove or delete`)
  }
}
