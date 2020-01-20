// 用户信息

const state = {
    userInfo: { //用户信息 字段如下
        appKey: '74f4dc5287428819'
    },

    // 后期对token进行真实请求 ---------------
    token: 'token123',
}

const getters = {
    // 导出 用户信息
    userInfo: state => state.userInfo,
    token: state => state.token,
}

const actions = {
    // 初始化 用户信息  注意：只在模块首页初始化一次即可，拿取用户信息请使用 getters
    initUserInfo({
        commit
    }) {
        return new Promise((resolve, reject) => {
            commit('initUserInfo', '123abc')
        })
    },

    // 获取用户信息，防止userInfo初始化时发生错误
    getUserInfo({ state, commit }) {
        return new Promise((resolve, reject) => {
            if (tools.isObject(state.userInfo) && !tools.isEmptyObject(state.userInfo)) {
                resolve(state.userInfo)
            } else {
                actions.initUserInfo({ commit })
                    .then(res => {
                        resolve(res)
                    })
                    .catch(() => {
                        reject()
                    })
            }
        })
    }
}

const mutations = {
    'initUserInfo'(state, value) {
        if (tools.isObject(value)) {
            // value = tools.deepCopy(value)
            state.userInfo = value
        }
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}