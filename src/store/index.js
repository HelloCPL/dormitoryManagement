// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

import userInfoStore from './modules/userInfoStore'
import testStore from './modules/testStore'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        userInfoStore,
        testStore
    }
})

export default store
