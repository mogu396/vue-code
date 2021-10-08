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
          <a href="https://github.com/mogu396/vue-code" alt="github项目地址" title="github项目地址">关于项目</a>
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
  width: 1210px;
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
  line-height: 50px;
  font-weight: 200;
}

.nav-container > .about a{
  color: #fff;
}

.nav-container > .about a:hover {
  color: #80bd01;
}
</style>