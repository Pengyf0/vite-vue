
let person = {
  name: 'li-si',
  fisrtName() {
    return this.name.split('-')[0]
  }
}
let reactiveMap = new WeakMap();//存代理过的对象
const ReactiveFlags = {
  IS_REACTIVE: '__v_isReactive'
}
let p1 = reactive(person);
let p2 = reactive(p1)
console.log(p1 === p2)

function reactive(target) {//把对象塞进去
  if (typeof target !== 'object' && target === null) {
    return target
  }//1普通属性不用代理

  if (target[ReactiveFlags.IS_REACTIVE]) {//2判断有没有get方法代理方法。有直接不用在new Proxy代理了
    return target
  }

  let exitProxy = reactiveMap.get(target)//3已经代理过的对象直接返回
  if (exitProxy) return exitProxy

  const proxy = new Proxy(target, {//代理对象，如果代理过了就存进map里面
    get(target, key, receiver) {
      if (ReactiveFlags.IS_REACTIVE == key) {
        return true
      }
      //track(target,key)//收集依赖每次执收集之前要清除原有的依赖，拷贝原理有的依赖去删除。
      return Reflect.get(target, key, receiver)//可以确定this 的作用域
    },
    set(target, key, value, receiver) {

      // let oldvalue = target[key];//派发更新
      // if(oldvalue!=value){
      //   trigger(target, key, value, oldvalue)
      // }
      return Reflect.get(target, key, value, receiver)//设置返回的是个bloean
    }
  })

  reactiveMap.set(target, proxy)//值=>代理对象 一一对应

  return proxy
}

