<template>
  <div class="user-detail">
    <div class="content">
      <div class="home-page panel" v-if="user">
        <div class="header">用户主页</div>
        <div class="user-info">
          <img :src="user.data.avatar_url" alt="用户头像" />
          <span id="user-loginName">{{ user.data.loginname }}</span>
          <div class="user-profile">
            <div>积分:{{ user.data.score }}</div>
            <div>
              Github:
              <a
                :href="'http://www.github.com/' + user.data.githubUsername"
                target="_blank"
              >
                {{ user.data.githubUsername }}
              </a>
            </div>
          </div>
          <span id="regist-time"
            >注册时间:{{
              $dayjs().diff(user.data.create_at, "day") >= 1
                ? $dayjs().diff(user.data.create_at, "day") + "天前"
                : "1天前"
            }}
          </span>
        </div>
      </div>
      <div class="recent-createTopics panel">recentCreate</div>
      <div class="recent-joinTopics panel">recentJoin</div>
    </div>
    <!-- <div class="side-bar">
      <div class="personInfo u-1of3">personInfo</div>
    </div> -->
  </div>
</template>

<script>
import { getUserDetail } from "../../utils/api";
export default {
  name: "HomePage",
  props: ["loginname"],
  data() {
    return {
      user: "",
    };
  },
  methods: {
    getUserDetailFun(loginname) {
      getUserDetail(loginname).then((res) => {
        this.user = res.data;
        console.log("getuser", this.user);
      });
    },
  },
  created() {
    this.getUserDetailFun(this.loginname);
  },
};
</script>

<style scoped>
.user-detail {
  width: 80%;
  margin: 0 auto;
}

.user-profile{
  color:#778087
}
.user-profile a{
  text-decoration: underline;
}

.content {
  margin-right: 305px;
}

.panel {
  background-color: #f6f6f6;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  margin-bottom: 50px;
  border-radius: 5px;
}

/* 用户主页 */
.home-page {
  /* border: 1px solid black; */
}
.home-page .header {
  padding: 10px;
  background-color: #e1e1e1;
}
.home-page img {
  width: 40px;
  height: 40px;
}
.home-page a {
  color: #778087;
}
#user-loginName {
  vertical-align: top;
  color: #778087;
  padding-left: 5px;
}
#regist-time {
  color: #ababab;
  font-size: 12px;
}
.user-info {
  padding: 10px;
}

/* 用户最近创建话题 */
</style>