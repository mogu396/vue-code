<template>
  <div class="user-home">
    <!-- <HomePage :loginname='$route.params.id'/> -->
    <HomePage :loginname='loginname'/>
  </div>
</template>

<script>
import HomePage from '../components/user/HomePage.vue'
export default {
  name: "User",
  components: {
    HomePage,
  },
  data() {
    return {
      loginname:''
    };
  },
  created(){
    this.loginname=this.$route.params.id
  }
};
</script>

<style scoped>
  .user-home{
    margin-top: 15px;
    
  }
</style>