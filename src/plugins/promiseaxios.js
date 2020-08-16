    getDepartPerson(departData){
	     let that = this;
	     return new Promise(function(resolve,reject) {
	    that.$axios({
	      url: departData.departId,
	      params: departData.departName
	     }).then(res => {
	      resolve(res.data.data)
	     })
	   })
   },
   setPersonData(){
     const data = [{
     departId: '/api/goods/banner',
     departName: '{_limit:4}'
    }, {
     departId: '/api/goods/tourism',
     departName: '{_limit:2}'
    }, {
     departId: '/api/goods/specialtyMall',
     departName: '{_limit:3}'
    },{
		departId: '/api/goods/cityside',
		departName: '{_limit:2}'
	},
	{
		departId: '/api/goods/newslist',
		departName: '{_limit:2}'
	}]
    let promise1 = this.getDepartPerson(data[0])
    let promise2 = this.getDepartPerson(data[1])
    let promise3 = this.getDepartPerson(data[2])
	let promise4 = this.getDepartPerson(data[3])
	let promise5 = this.getDepartPerson(data[4])
    console.log(promise1,promise2,promise3,promise4,promise5);
    let that = this;
	
    Promise.all([promise1,promise2,promise3,promise4,promise5]).then(value => {
      //value返回的数据是按顺序的
	  console.log(value)
    })
   }
   export default  setPersonData;
   
   
   this.$axios.all([
   　　　　this.$axios.get('/api/goods/banner',).then(res => res.data),
   　　　　this.$axios.get(url).then(res => res.data)
   　　]).then(
   　　　　this.$axios.spread((val1,val2) => {
   　　　　// val 是数组中每个接口返回的值 res.data
   　　　　console.log('两个接口全部加载完成',val1,val2) ; // 1,2
   　　})
   ).catch(err => {
   　　console.log(err) ;
   })
