import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import { visualizer } from 'rollup-plugin-visualizer'
const os = require('os')//配置局域网地址
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
console.log('内网地址', ip)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), visualizer({ open: true })],
  pluginOptions: {
    'style-resouces-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    host: "0.0.0.0"
  },
  define: {
    LAST_UPDATE_TIME: JSON.stringify((new Date).toLocaleString()),
    LOCAL_IP: JSON.stringify(ip),
    GLOBAL_VAR: { test: 'i am global var from vite.config.js define' },
  }
})
