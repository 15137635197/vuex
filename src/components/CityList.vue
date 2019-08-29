<template>
	<div class="city">
		<ul>
			<li v-for="(item,index) in cityArr" @click="backFn(index)">
				<h3>{{item}}</h3>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				cityArr:['北京','上海','广州','深圳','茂名','张家界','清远','汕头','佛山']
			}
		},
		methods:{
			backFn:function(index){
				this.$store.dispatch('setCityName',this.cityArr[index])
				this.$router.push('/')

			}
		}
	}
</script>
<style type="text/css" media="screen">
	
</style>