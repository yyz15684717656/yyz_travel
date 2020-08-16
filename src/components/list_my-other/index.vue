<template>
  <div id="list_s">
    <div class="order_nav">
        <ul class="box_nav am-avg-sm-4">
            <router-link v-for="(item,index) of list_data" tag='li' to='' index='index' @click.native="change(index)">
                    <img :src='item.imgSrc'/>
                    <p>{{item.title}}</p>
            </router-link>
            <div class="clear"></div>
        </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name:'nvList',
	data(){
		return {
			want:'',
			gowant:""
		}
	},
	methods:{
		change(val){
			this.want=val+1;
			if(this.want==1){
				this.$router.push("/postnotes")
			}else if(this.want==2){
				this.$router.push("/collection")
			}else if(this.want==3){
				this.$router.push("/myorder")
			}else{
				this.$router.push("travelOrder")
			}
		}
	},
	updated(){
		
	},
    props:{
     list_data:{
		 type:Array,
		 required:true
	 }
    }
  }
</script>

<style scoped>
 #list_s .order_nav{
      padding: .2rem;
      background-color: white;
      /* margin-bottom: 10px; */
	  box-sizing: border-box;
  }
  
  .box_nav{
	 display: flex;
	 justify-content: space-between;
	 align-items: center;
  }
  .box_nav li{
	  padding-left: .2rem;
  }
 #list_s .order_nav .box_nav img{
      width: 60px;
      height: 60px;
     
  }
 #list_s .order_nav .box_nav li a{
      display: block;
      text-align: center;
  }
 #list_s .order_nav .box_nav li p{
      font-size: 14px;
      color: #333;
  }
  #list_s{
	   width: 100%;
  }
</style>
