<template>
  <div class="user-home">
    <!-- <HomePage :loginname='$route.params.id'/> -->
    <HomePage :loginname="loginname" />
  </div>
</template>

<script>
import HomePage from "../components/user/HomePage.vue";
export default {
  name: "User",
  components: {
    HomePage,
  },
  data() {
    return {
      loginname: "",
    };
  },
  created() {
    this.loginname = this.$route.params.id;
  },
};
</script>

<style scoped>
.user-home {
  width: 1210px;
  margin: 0 auto;
  margin-top: 15px;
}
</style>