<template>
  <div class="nav">
    <!-- 状态栏 -->
    <div class="nav-container">
      <div class="logo">
        <a href="/">
          <img src="../assets/images/cnodejs_light.svg" alt="首页" />
        </a>
      </div>
      <!-- 关于网站 -->
      <div class="about">
          关于
          <a href=""></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style scoped>
.nav {
  width: 100%;
  background-color: #444;
  height: 50px;
  overflow: hidden;
}
.nav > .nav-container {
  width: 85%;
  margin: 0 auto;
}
.nav-container > .logo {
  float: left;
  width: 120px;
  height: 34px;
  margin-top: 8px;
}

/* 关于 */
.nav-container > .about {
  float: right;
  color: white;
  line-height: 50px;
  cursor: pointer;
  font-weight: 200;
}

.nav-container > .about:hover {
  color: #80bd01;
}
</style>