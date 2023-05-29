// import { networkInterfaces } from 'os'
let os = require('os')
function getLocalIP() {
  let interfaces = os.networkInterfaces()
  for (let devName in interfaces) {
    let iface = interfaces[devName]
    for (let i = 0; i < iface.length; i++) {
      let alias = iface[i]
      if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
        return alias.address
      }
    }
  }
}
const ip = getLocalIP()
console.log('内网地址只能放在node环境中启动', ip)


