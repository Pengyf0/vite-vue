let obj = {
  name: 'penyf',
  female: '男',
  age: 10
}
observer(obj)

function setName() {
  document.querySelector("#myname").textContent = "名字/年龄:" + obj.name + '/' + obj.age;
}
function setFemale() {
  document.querySelector("#female").textContent = "性别:" + obj.female;
}
function setAge() {
  document.querySelector("#age").textContent = "年龄:" + obj.age;
}
autoRun(setName)
autoRun(setFemale)
autoRun(setAge)


//观察对象
function observer(obj) {
  for (let key in obj) {
    let innerVal = obj[key]
    let functions = new Set()
    Object.defineProperty(obj, key, {
      get() {
        //记录：依赖收集
        if (window.__func) {
          functions.add(window.__func)
        }
        console.log(functions)
        return innerVal
      },
      set(val) {
        //设置：派发更新
        innerVal = val;
        for (let i = 0; i < functions.size; i++) {
          [...functions][i]()
        }
      }
    })
  }
}

function autoRun(fn) {
  window.__func = fn;
  fn()
  window.__func = null
}




