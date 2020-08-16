import * as types from '../types.js';
import axios from '../../plugins/axios.js'

const state={
  home:[],
}

const actions = {
  [types.UPDATE_HOME]: ({state,commit},payload)=>{
    axios({
      url:'/api/goods/home',
      params:{_limit:30}
    }).then(
      res=>commit(types.UPDATE_HOME,res.data.data)
    )
  },
}

const mutations = {
  [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations,getters
}