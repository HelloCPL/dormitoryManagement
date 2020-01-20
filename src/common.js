// ---------------------存放公共方法--------------------
import {mapGetters, mapActions} from 'vuex'
export default {
    install: function(Vue, params) {
        params = params || {}
        Vue.mixin({
            computed: {
                // 全局调用vuex公共变量
                ...mapGetters({
                    userInfoGetter: 'userInfo'
                })
            },
            // 命名使用大驼峰法
            methods: {
                // 全局调用vuex公共方法
                ...mapActions({
                    getUserInfoAction: 'getUserInfo'
                }),

                // 获取元素宽高位置等信息
                GetElement(id) {
                    return new Promise(resolve => {
                        let query = wx.createSelectorQuery()
                        query.select(id).boundingClientRect()
                        query.exec(res => {
                            resolve(res[0])
                        })
                    })
                }
            },
        })
    }
}