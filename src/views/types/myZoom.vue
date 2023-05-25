<template>
  <div>
    <div class="outer">
      <div class="one"></div>
      <div class="two">23333</div>
      <div class="three"></div>
    </div>
  </div>
</template>

<script setup>
const tree = {
  value: 'a1',
  children: [
    { value: 'b2', children: [] },
    { value: 'c3', children: [] },
    {
      value: 'd4',
      children: [
        { value: 'e6', children: [] }
      ]
    }
  ]
}
//查询子元素路径 
//查询a ['a1']
//查询e6 ['a1','d4','e6']

function findNode(tree, path, val) {
  if (tree.value.includes(val)) {  // 找到目标节点
    return path.concat(tree.value)  // 返回路径
  }

  path.push(tree.value)  // 记录当前节点

  for (let i = 0; i < tree.children?.length; i++) {
    const foundPath = findNode(tree.children[i], path.slice(), val)  // 递归查询子节点.slice克隆下防止多次重复
    if (foundPath) return foundPath  // 如果找到,返回路径
  }
}
const path = findNode(tree, [], '6')//分别传入数组，默认路径，要查的值。只能找到第一个
console.log(path, 999)

</script>

<style lang="scss" scoped>
.outer {
  height: 100px;
  width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;

  .one {
    height: 40px;
    width: 5px;
    border: 1px solid black;
    border-right: none;
  }

  .two {
    height: 30px;
    width: 200px;
    color: blue;
    text-align: center;
    line-height: 30px;
    background: yellow;
  }

  .three {
    height: 40px;
    width: 5px;
    border: 1px solid black;
    border-left: none;
  }
}
</style>