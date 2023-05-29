let cache = new WeakMap()
function myClone(value) {
  //1判断传入值是否是对象，不是直接返回
  if (typeof value !== 'object' || value !== null) return value
  //2如果为对象，判断是数组还是对象
  const result = Array.isArray(value) ? [] : {};
  //3设置当前对象的原型和原来要克隆的一样
  Object.setPrototypeOf(result, Object.getPrototypeOf(value))
  //4循环引用的元素 直接返回原来存在的引用值
  const isCache = cache.get(value)
  if (isCache) return isCache
  //5去除原型链属性,hasOwnProperty
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      result[key] = myClone(value[key])
    }
  }
  return result
}
export default myClone