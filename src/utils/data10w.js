//模拟十万条数据在页面显示，用定时器的方法累计增加提高效率
const renderList = async () => {

  const list = await getList()

  const total = list.length
  const page = 0
  const limit = 2000
  const totalPage = Math.ceil(total / limit)

  const render = (page) => {
    if (page >= totalPage) return
    setTimeout(() => {
      for (let i = page * limit; i < page * limit + limit; i++) {
        const item = list[i]
        const div = document.createElement('div')
        div.className = 'sunshine'
        div.innerHTML = `<img src="${item.src}" /><span>${item.text}</span>`
        container.appendChild(div)
      }
      render(page + 1)
    }, 0)
  }
  render(page)
}