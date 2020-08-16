import * as types from '../types.js';
import axios from '../../plugins/axios.js'
import {baseUrl} from '../../config/base.js';

const state={
   detail:{},
}

const actions = {
  [types.UPDATE_DETAIL]: ({state,commit},{collectionName,_id})=>{
    axios({
      url:`/api/goods/${collectionName}/${_id}`,
    }).then(
      res=>commit(types.UPDATE_DETAIL,res.data.data)
    )
  },
}

const mutations = {
  [types.UPDATE_DETAIL]:(state,payload)=>state.detail=payload,
  [types.CLEAR_DETAIL]:(state,payload)=>state.detail={}
}

const getters = {
  isDetail(state){
    // console.log('isDetail')
    if(state.detail.detail){
      if(state.detail.detail.auth_icon  && state.detail.detail.auth_icon.includes('http:') ){
        return state.detail.detail.auth_icon
      }
      if(state.detail.detail.icon  && state.detail.detail.icon.includes('http:') ){
        return state.detail.detail.icon
      }
    }else{
      if(state.detail.detail.auth_icon  && state.detail.detail.auth_icon.includes('http:') ){
         return baseUrl + state.detail.detail.auth_icon
      }
      if(state.detail.detail.icon  && state.detail.detail.icon.includes('http:') ){
        return baseUrl + state.detail.detail.icon
      }
     
    }
    
  }
}

export default {
  namespaced:true,
  state,actions,mutations,getters
}