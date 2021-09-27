<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  data(){
    return{
      
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
