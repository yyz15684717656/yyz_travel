import * as types from '../types.js';
import axios from '../../plugins/axios.js'

const state={
  user:{
    err:1,
    msg:'登录失败'
  }
}

const actions = {
  
}

const mutations = {
 [types.UPDATE_USER]:(state,payload)=>{
   console.log('mutionas',payload);
   state.user={...state.user,...payload}
 },
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations,getters
}