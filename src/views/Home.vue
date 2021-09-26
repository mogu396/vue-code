<template>
  <div class="home">
    <div class="content">
      <el-tabs v-model="activeTab" @tab-click="changeTab">
        <el-tab-pane label="全部" name="all" class="myTabPane">
          <Content :contentList="contentList" />
          <button @click="sendTest">123</button>
        </el-tab-pane>
        <el-tab-pane label="精华" name="good" class="myTabPane">
          <Content :contentList="contentList" />
        </el-tab-pane>
        <el-tab-pane label="分享" name="share" class="myTabPane"
          ><Content :contentList="contentList"
        /></el-tab-pane>
        <el-tab-pane label="问答" name="ask" class="myTabPane"
          ><Content :contentList="contentList"
        /></el-tab-pane>
        <el-tab-pane label="招聘" name="job" class="myTabPane"
          ><Content :contentList="contentList"
        /></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Content from "../components/Content.vue";
import "../utils/http.js"
export default {
  name: "Home",
  components: { Content },
  data() {
    return {
      activeTab: "all",
      contentList: [],
    };
  },
  methods: {
    changeTab(tab, event) {
      console.log(tab, event);
    },
    sendTest(){
      
    }

  },
};
</script>

<style scoped>
/* 添加scoped后无法起作用，使用深度选择器 */

/* .home >>>.el-tabs__item{
    color: #80bd01;
  } */
/* .home >>>.el-tabs__item{
    width: ;
  } */
.content >>> .el-tabs__item:hover {
  color: #80bd01;
}
.content >>> .is-active {
  color: #80bd01;
}

.home {
  display: flex;
  width: 60%;
  justify-content: center;
  margin-top: 20px;
}
</style>
