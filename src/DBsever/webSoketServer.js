const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8800 });

const preMsg = []  // 保存消息历史



wss.on('connection', (ws) => {
  // 发送消息历史5条
  if (preMsg.length > 0) {
    let latest5 = preMsg.slice(-5)
    ws.send(JSON.stringify(latest5))
  }
  console.log('Client connected,8800', JSON.stringify(preMsg));
  ws.on('message', (msg) => {
    console.log(`Received => ${msg}`);
    console.log(`${msg}`, preMsg)
    preMsg.push(`${msg}`)
    // 处理客户端发送的消息，如发送给其他客户端等
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === ws.OPEN) {
        client.send(msg)
      }
    })
  });
});