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
            >注册时间:{{ registTime(user.data.create_at) }}
          </span>
        </div>
      </div>
      <div class="recent-createTopics panel" v-if="user">
        <div class="header">最近创建的话题</div>
        <div
          class="topics-list"
          v-for="topic in user.data.recent_topics.slice(0, 5)"
          :key="topic.id"
        >
          <div class="topics-panel">
            <img :src="user.data.avatar_url" alt="用户头像" />
            <router-link :to="{path:`/topics/${topic.id}`}">
               <span id="topic-title">{{ topic.title }}</span>
            </router-link>
          </div>
        </div>
        <div class="look-more">查看更多>></div>
      </div>
      <div class="recent-joinTopics panel" v-if="user">
        <div class="header">最近参与话题</div>
        <div
          class="replies-list"
          v-for="replies in user.data.recent_replies.slice(0, 5)"
          :key="replies.id"
        >
          <div class="replies-panel">
            <img :src="user.data.avatar_url" alt="用户头像" />
            <router-link :to="{path:`/topics/${replies.id}`}">
            <span id="replices-title">{{ replies.title }}</span>
            </router-link>
          </div>
        </div>
        <div class="look-more">查看更多>></div>
      </div>
    </div>
    <div class="side-bar">
      <div class="person-info panel">
        <div class="header">个人信息</div>
        <div class="person-info-panel">123</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserDetail } from "../../utils/api";
import { dayComputed } from "../../utils/utils";
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
        console.log(this.user.data.recent_topics);
      });
    },
    registTime(createAt) {
      return dayComputed(createAt);
    },
  },

  created() {
    this.getUserDetailFun(this.loginname);
  },
};
</script>

<style scoped>
.user-detail {
  position: relative;
}

.user-profile {
  color: #778087;
}
.user-profile a {
  text-decoration: underline;
}

.content {
  float: left;
  width: 70%;
}

.panel {
  background-color: #f6f6f6;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  margin-bottom: 25px;
  border-radius: 5px;
}

.header {
  padding: 10px;
  background-color: #e1e1e1;
}

.look-more {
  padding: 10px;
}

/* 用户主页 */
.home-page {
  /* border: 1px solid black; */
}

.home-page img {
  width: 50px;
  height: 50px;
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
  font-size: 14px;
}
.user-info {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}

/* 用户最近创建话题 */
.recent-createTopics img {
  width: 40px;
  height: 40px;
}
.topics-panel {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}

#topic-title {
  display: inline-block;
  margin-left: 5px;
  /* width: 70%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 最近参与话题 */
.recent-joinTopics img {
  width: 40px;
  height: 40px;
}

.replies-panel {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}

#replices-title {
  display: inline-block;
  margin-left: 5px;
  /* width: 70%; */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.recent-createTopics a,.recent-joinTopics a{
  color: #333;
}

/* 侧边栏 */
.side-bar {
  float: left;
  width: 25%;
  margin-left: 30px;
}
</style>