
function myNew(fn, ...args) {
  //1.定义空对象
  const obj = {}
  //2.隐式原型指向构造函数的显式原型
  obj._proto_ = fn.prototype
  //3执行构造函数，this指向空对象
  fn.apply(obj, args)
  //4返回对象
  return obj
}


export default myNew