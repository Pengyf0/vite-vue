/** 
深度克隆方法，解决循环引用
*/

let obj = {
  arr: [{ age: 10 }],
  obj: { name: 'lisi' },
  fn: function () { console.log('hello,world') },
  set: new Set(['e', 'f']),
  map: new Map([['dun', 'xia'], ['duo', 'bi']]),
  regex: /str/,
  nul: null,
  unde: undefined,
  name: 'hamapi',
  age: 22,
  isBol: true
}
//循环引用
let obj2 = {}
obj2.to = obj
obj.to = obj2





//缓存已经处理的OBj
let cacheData = new WeakMap();//let cacheData = new Map();Map()效果略差，如果obj 被清除，Map还会存在

function deepClone(obj) {
  // 基础变量处理
  if (typeof obj !== 'object' || !obj) return obj

  if (cacheData.has(obj)) {
    return cacheData.get(obj)
  }

  //对象处理
  if (obj instanceof RegExp) {
    let temp = new RegExp(obj);
    cacheData.set(obj, temp)
    return temp
  } else if (obj instanceof Map) {
    //注意forEach 参数是value,index
    let temp = new Map();
    cacheData.set(obj, temp)
    obj.forEach((val, key) => {
      temp.set(deepClone(key), deepClone(val))
    })
    return temp
  } else if (obj instanceof Set) {
    let temp = new Set();
    cacheData.set(obj, temp)
    obj.forEach((val) => {
      temp.add(deepClone(val))
    })
    return temp
  } else {
    let temp = new obj.constructor()
    cacheData.set(obj, temp)
    for (let key in obj) {
      temp[key] = deepClone(obj[key])
    }
    return temp
  }
}
// let objClone = deepClone(obj);
// console.log(obj, objClone)

//第二种 MessChannel方法，除了function 其他完美客隆
// function deepCopy(obj) {
//   return new Promise((resolve) => {
//     const { port1, port2 } = new MessageChannel();
//     port1.postMessage(obj);
//     port2.onmessage = ev => resolve(ev.data);
//   });
// }
// deepCopy(obj).then((copy) => {           // 请记住`MessageChannel`是异步的这个前提！
//   let copyObj = copy;
//   console.log(copyObj, obj)
//   console.log(copyObj == obj)
// });

//第三种改良封装后的方法
function isObject(target) {
  return (typeof target === 'object' || typeof target === 'function') && target !== null;
}

function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}
//第三种添加类型
function deepClone3(target, map = new WeakMap()) {
  // 处理原始类型和函数
  if (!isObject(target)) {
    return target;
  }

  // 处理循环引用
  if (map.has(target)) {
    return map.get(target);
  }

  // 保持对象的构造函数
  const cloneTarget = getInit(target);
  map.set(target, cloneTarget);

  // 处理特殊对象
  if (target instanceof Date) {
    return new Date(target);
  }
  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags);
  }

  // 处理 Map 和 Set
  if (target instanceof Map) {
    target.forEach((value, key) => {
      cloneTarget.set(key, deepClone3(value, map));
    });
    return cloneTarget;
  }
  if (target instanceof Set) {
    target.forEach((value) => {
      cloneTarget.add(deepClone3(value, map));
    });
    return cloneTarget;
  }

  // 处理普通对象和数组
  for (const key in target) {
    if (Object.prototype.hasOwnProperty.call(target, key)) {
      cloneTarget[key] = deepClone3(target[key], map);
    }
  }

  return cloneTarget;
}

// 示例
const obj3 = {
  a: 1,
  b: [1, 2, 3],
  c: {
    d: new Date(),
    e: /test/g,
  },
  f: new Map([['key', 'value']]),
  g: new Set([1, 2, 3]),
  h: function () {
    console.log('hello');
  },
};

// const clonedObj = deepClone3(obj);
// console.log(clonedObj);



//完整简化版本

let cache4 = new WeakMap()
function deepClone4(value) {

  if (typeof value !== 'object' || value !== null) return value

  const result = Array.isArray(value) ? [] : {};
  Object.setPrototypeOf(result, Object.getPrototypeOf(value))

  const isCache = cache4.get(value)
  if (isCache) return isCache

  for (const key in value) {
    if (value.hasOwnProperty(key)) {//去除原型链属性
      result[key] = deepClone4(value[key])
    }
  }
  return result
}
let objClone = deepClone4(obj);
console.log(obj, objClone)
