import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
	auth:{
		//������
		token:null,
		//userId
		userId:null
	},
	board:{
		//���Tasklist�͋�ŏ�����
		lists:[]
	}
}

export default new Vuew.Store({
	state,
	getters,
	actions,
	mutations,
	strict: process.env.NODE_ENV !== 'production'
})
