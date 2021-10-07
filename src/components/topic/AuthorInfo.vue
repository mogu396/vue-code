<template>
  <div class="author-info" v-if="myTopic">
    <div class="header">作者</div>
    <div class="user-card" v-if="user">
      <img :src="myTopic.data.author.avatar_url" alt="作者" />
      <router-link :to="{ path: `/user/${myTopic.data.author.loginname}` }">
        <span class="user-name">{{ myTopic.data.author.loginname }}</span>
      </router-link>
      <div class="point">积分:{{ user.data.score }}</div>
      <div class="regist-time">注册时间:{{ registTime }}</div>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "../../utils/api";
import { dayComputed } from "../../utils/utils";
export default {
  name: "AuthorInfo",
  props: ["topic"],
  data() {
    return {
      loginname: "",
      myTopic: "",
      user: "",
    };
  },
  methods: {
    getAuthorInfo(loginname) {
      getUserDetail(loginname).then((res) => {
        this.user = { ...res.data };
        console.log("getuser", this.user);
      });
    },
  },
  watch: {
    // 监视父组件传过来topic的值，当父组件通过axios获取的值传到时。执行下面代码
    topic(value) {
      this.myTopic = value;
      console.log("mytopic", this.myTopic);
      this.getAuthorInfo(this.myTopic.data.author.loginname);
    },
  },
  computed: {
    registTime() {
      return dayComputed(this.user.data.create_at);
    },
  },
  mounted() {
    // this.$bus.$on('getLoginName',(data)=>{
    //   this.loginname=data
    // })
    // this.$nextTick(this.getAuthorInfo(this.myTopic.data.author.loginname))
  },
};
</script>

<style>
.author-info {
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  background-color: #f6f6f6;
  border-radius: 5px;
}
.author-info img {
  width: 48px;
  height: 48px;
  border-radius: 3px;
}

.author-info .header {
  background-color: #e1e1e1;
  padding: 10px;
}
.author-info .user-card {
  position: relative;
  border-top: 1px solid #e5e5e5;
  padding: 10px;
}

.user-card {
  color: #333;
}

.user-card .user-name {
  position: absolute;
  font-size: 16px;
  top: 25px;
  left: 70px;
  color: #778087;
}

.user-card .point {
  margin-top: 10px;
}
.user-card .regist-time {
  margin-top: 10px;
}
</style>