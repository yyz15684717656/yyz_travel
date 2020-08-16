import {baseUrl} from '../config/base.js';
let getters = {
  isDetail(state){
    console.log('isDetail')
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

export default getters;
