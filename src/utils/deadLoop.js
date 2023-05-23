//写一个死循环，阻碍主线程的执行。
function delay(t) {
  let start = Date.now();
  while (Date.now() - start < t) { }
}