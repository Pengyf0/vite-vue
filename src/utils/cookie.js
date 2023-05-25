//一个数组过滤方法    
//对设置或者根据名字获取cookie
export function setCookie(name, value, day) {
  let date = new Date()
  date.setDate(date.getDate() + day)
  document.cookie = `${name}=${value};expires=${date}`
}
export function getCookie(name) {
  var reg = RegExp(name + '=([^;]+)');
  var arr = document.cookie.match(reg);
  return arr ? arr[1] : ''
}
