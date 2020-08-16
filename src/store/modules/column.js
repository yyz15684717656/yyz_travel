import * as types from '../types.js';
import axios from '../../plugins/axios.js'

const state={
  column:[]
}

const actions = {
  [types.UPDATE_COLUMN]: ({state,commit},payload)=>{
    axios({
      url:'/api/goods/column',
      params:{_limit:10}
    }).then(
      res=>commit(types.UPDATE_COLUMN,res.data.data)
    )
  },
}

const mutations = {
  [types.UPDATE_COLUMN]:(state,payload)=>state.column=payload,
}

const getters = {}

export default {
  namespaced:true,
  state,actions,mutations,getters
}