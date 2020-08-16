import * as types from './types.js';
import axios from '../../plugins/axios.js'

const state={
  follow:[],
}

const actions = {
  [types.UPDATE_FOLLOW]: ({state,commit},payload)=>{
    axios({
      url:'/api/goods/follow',
      params:{_limit:20}
    }).then(
      res=>commit(types.UPDATE_FOLLOW,res.data.data)
    )
  },
}

const mutations = {
  [UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,
}

const getters = {}

export default ={
  namespaced:true,
  state,actions,mutations,getters
}