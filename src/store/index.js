import { createStore } from "vuex";
import user from './moudules/user'
import book from './moudules/book'

export default createStore({
  state: {},//数据
  mutations: {},//变更
  actions: {},//异步
  getters: {},//动态数据
  modules: {
    user,
    book
  }
})