import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //最热文章3
    popularArticles:[

    ],
    //最热分类6
    topCategories:[],
    //最新文章
    latestArticles:[],
    //本站统计
    statistics:[],
    //公告
    bulletin:"",
    //标签
    Labels:[],
  },
  mutations: {

  },
  actions: {
  },
  modules: {
  }
})
