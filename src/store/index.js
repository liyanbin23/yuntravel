import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        setUserInfo (state, data) {
            state.userInfo = data
        }
    },
    // action 可以用来存放一些公共的方法，多个组件可以调用
    actions: {
    // 该函数有两个参数 第一个参数是store对象，第二个参数是传入的参数
    // 登录方法
        login (store, data) {
            // 调用login并把axios返回,因为promise可以实现链式调用
            return this.$axios({
                url: '/accounts/login',
                method: 'post',
                data: data
            }).then(res => {
                // 调用mutations 里面的方法，并修改state里面的属性
                store.commit('setUserInfo', res.data)
                // 这里因为要先修改state里面的状态，才把结果return回去
                return res
            })
        }

    },
    modules: {
    }
})
