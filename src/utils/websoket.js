let ws = null;
let global_callback = null
function initWebSocket(fn) {
  global_callback = fn;
  ws = new WebSocket('ws://localhost:8800');
  ws.onopen = () => {
    console.log('Connected to WebSocket server');
  };
  ws.onmessage = (message) => {
    console.log(`Received message => ${message}`);
    // 将消息展示在页面上，如添加到聊天记录等
    // receivedMessage(message)
  };
  ws.onerror = (error) => {
    console.error(`WebSocket error: ${error}`);
  };
  ws.onclose = () => {
    console.log('Disconnected from WebSocket server');
  };
}

function createWebSocket(fn) {
  console.log('初始化', ws)
  if (ws == null || typeof ws !== WebSocket) {
    initWebSocket(fn);
  }
}
function sendSoket(msg) {
  console.log('发送', ws)
  ws.send(msg)
}
function receivedMessage(msg) {
  let result = null;
  if (msg.data instanceof Blob) {
    const reader = new FileReader();
    reader.readAsText(msg.data, "UTF-8");
    reader.onload = (e) => {
      result = JSON.parse(reader.result);
      global_callback(result);
    };
  } else {
    result = JSON.parse(msg.data);
    global_callback(result);
  }
}
function closeSoket() {
  ws.close()
}
export { createWebSocket, sendSoket, closeSoket }

