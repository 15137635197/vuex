<template>
  <div class="text">
      <son></son>
      <div class="box">
        <h1>{{city}}</h1>
        <h4>gitlens的用法</h4>
        <p>合远程做比较</p>
        <router-link tag="button" to="/citylist">获取城市列表</router-link>
      </div>
  </div>
  
</template>

<script>
  import son from './son.vue'
  export default {
    data(){
      return{
      
      }
    },
    components:{
      son,

    },
    computed:{
      city:function(){
          return this.$store.getters.getCityFn;
      }
    }
  }
</script>