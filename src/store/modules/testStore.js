// 测试
const state = {
    count: 100
}

const getters = {
    count: state => state.count
}

const actions = {
    increment({
        commit
    }) {
        return new Promise((resolve, reject) => {
            commit('increment')
        })
    },

    decrement({
        commit
    }) {
        return new Promise((resolve, reject) => {
            commit('decrement')
        })
    }
}

const mutations = {
    'increment'(state) {
        state.count += 1
    },

    'decrement'(state) {
        state.count -= 1
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}