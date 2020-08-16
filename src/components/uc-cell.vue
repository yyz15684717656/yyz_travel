<template>
  <div class="uc-cell">
    <a class="add" v-if="isAdd" href="javascript:;" @click="$emit('click',data)">+</a>
    <div @click="getDetail">
      <h2><span v-show="index!==null">{{index + 1}}.</span>{{data.title}}</h2>
      <p>{{data.des}}</p>
    </div>
    
  </div>
</template>

<script>
  export default {
    name:'uc-cell',
    props:{
      data:{
        type:Object,
        required:true
      },
      index:{
        type:Number,
        default:null
      },
      url:{
        type:String,
        default:''
      },
      to:{
        type: Object,
        default:null
      },
      isAdd:{
        type: Boolean,
        default:false
      }
    },
    
    components:{},
    mounted(){},
    updated(){},
    methods:{
      getDetail(){
        if(this.url){
          window.open(this.url,'_blank');
        }else if(this.to){
          console.log({name:this.to.name,params:this.to.params,query:this.to.query})
          this.$router.push({name:this.to.name,params:this.to.params,query:this.to.query})
        }
      }
    }
  }
</script>

<style scoped>
  .uc-cell{padding:0 0.4rem;color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;}
  .uc-cell:active{background:#E5E7E8}
  .content .newsList{width:6.4rem; margin:0 auto;}
  .uc-cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
  .uc-cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
  .uc-cell .add{float: right;font-size: 20px;}
</style>
