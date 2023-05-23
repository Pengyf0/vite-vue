//防抖，无论变化多少次都会，在操作结束后1秒后执行当前函数
function debounce(fn, delay = 1000) {
  let timer = null;
  return () => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(), delay)
  }
}
//节流 一秒内内点击多少次，都只有第一次执行有效。两种实现，一种时间加减，一种定时器方式。
function throttle(fn, delay = 1000) {
  let timer = null
  return function () {
    if (timer) return
    fn()
    timer = setTimeout(() => { timer = null }, delay);
  }
}
//节流时间加减实现
function throttle2(fn, delay = 1000) {
  let startTime = 0
  return function () {
    let nowTime = new Date();
    if ((nowTime - startTime) > delay) {
      fn()
      startTime = nowTime
    }
  }
}

export { debounce, throttle, throttle2 }