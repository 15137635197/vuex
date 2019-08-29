import Vue from 'vue'
import Vuex from 'vuex'
// import state from './state.js'
// import mutations from './mutations.js'
// import getters from './getters.js'
// import actions from './actions.js'
Vue.use(Vuex)

export default new Vuex.Store({
	// 1
	state:{
		city:'城市名'
	},
	// 2
	getters:{
		getCityFn(state){
            return state.city;
        }
	},
	// 3
	actions:{
		//设置城市细腻些
		//参数列表{commit,state}
		// state指的是state数据
		// name就是调用此方法是要传的参数
		setCityName({commit,state},name){
			// 跟后台打交道
			// 调用mutations里面的方法
			commit('setCity',name)
		}
	},
	// 4
	mutations:{
		// state指的是state中的数据
		// name是传递过来的值
		setCity(state,name){
			state.city=name //将传参设置给state的city
		}
	},


})