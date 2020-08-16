import * as types from '../types.js';
import axios from '../../plugins/axios.js'

const state={
  banner:[],
}

const actions = {
  [types.UPDATE_BANNER]: ({state,commit},payload)=>{
    axios({
      url:'/api/goods/banner',
      params:{_limit:3}
    }).then(
      res=>res.data.err==0 && commit(types.UPDATE_BANNER,res.data.data)
    )
  },
}

const mutations = {
  [types.UPDATE_BANNER]:(state,payload)=>state.banner=payload,
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations,getters
}