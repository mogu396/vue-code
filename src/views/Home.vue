<template>
  <div class="home">
    <div class="content">
      <el-tabs v-model="activeTab" @tab-click="changeTab">
        <el-tab-pane label="全部" name="all" class="myTabPane">
          <Content :contentList="contentList" :page="page" />
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
    <div class="prev" @click="tabPlus">
      <i class="iconfont icon-arrow-right"></i>
    </div>
    <div class="back" @click="tabReduce">
      <i class="iconfont icon-arrow-left"></i>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

import Content from "../components/Content.vue";
import { getTopics } from "../utils/api.js";
export default {
  name: "Home",
  components: { Content },
  data() {
    return {
      // page是页数，这里显示第一页的内容
      page: 1,
      // 这里的tab，为all显示所有，good显示精华，类推
      tab: "all",
      // limit为一页显示的内容条数
      limit: 30,
      activeTab: "all",
      // 将请求回来的数据，传入Content组件
      contentList: [],
    };
  },
  methods: {
    changeTab(tab, event) {
      console.log(tab, event);
      // console.log(this.tab);
      this.tab = tab.name;
      this.getTopicsContent();
    },
    getTopicsContent() {
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab,
      }).then((res) => {
        // console.log(res.data)
        this.contentList = res.data;
      });
    },
    tabPlus() {
      this.page++;
      getTopics({
        page: this.page,
        limit: this.limit,
        tab: this.tab,
      }).then((res) => {
        // console.log(res.data)
        this.contentList = res.data;
      });
    },
    tabReduce() {
      if (this.page <= 1) {
        alert("已经是最新消息");
      } else {
        this.page--;
        getTopics({
          page: this.page,
          limit: this.limit,
          tab: this.tab,
        }).then((res) => {
          // console.log(res.data)
          this.contentList = res.data;
        });
      }
    },
  },
  created() {
    this.getTopicsContent();
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
  width: 1210px;
  height: 50px;
  margin: 0 auto;
  margin-top: 15px;
  position: relative;
}

.content {
  background-color: #fff;
  padding: 20px 20px 10px 20px;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  border-radius: 5px;
}

/* 前进按钮 */
.prev {
  position: fixed;
  top: 50%;
  right: 0;
  width: 50px;
  height: 50px;
  box-shadow: 1px 1px 7px rgb(0 0 0 / 30%);
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
.back {
  width: 50px;
  height: 50px;
  position: fixed;
  top: 50%;
  left: 0;
  box-shadow: 1px 1px 7px rgb(0 0 0 / 30%);
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
</style>
