<template>
  <div class="main-panel">
    <div id="topic-detail">
      <div class="topic" v-if="topic">
        <div class="first-piece">
          <div class="title">{{ topic.data.title }}</div>
          <div class="topic-info">
            <span>发布于{{ createAt }}</span>
            <span> / </span>
            <router-link :to="{ path: `/user/${topic.data.author.loginname}` }">
              <span class="author">作者:{{ topic.data.author.loginname }}</span>
            </router-link>
            <span> / </span>
            <span>{{ topic.data.visit_count }}次浏览</span>
            <span> / </span>
            <span>来自{{ tabComputed(topic.data.tab) }}</span>
          </div>
          <div class="topic-content" v-html="topic.data.content"></div>
        </div>
        <TopicReplies :topic="topic" />
      </div>
      <div class="author-panel">
        <AuthorInfo :topic="topic"/>
      </div>
    </div>
  </div>
</template>

<script>
import TopicReplies from "../components/topic/TopicReplies.vue";
import AuthorInfo from "../components/topic/AuthorInfo.vue";
import { getTopicDetail } from "../utils/api";
import { dayComputed } from "../utils/utils";
export default {
  name: "Topic",
  components: {
    TopicReplies,
    AuthorInfo,
  },
  data() {
    return {
      topicId: "",
      topic: "",
    };
  },
  methods: {
    getTopicContent(id) {
      getTopicDetail(id).then((res) => {
        this.topic = { ...res.data };
        // console.log(this.topic);
      });
    },
    tabComputed(tab) {
      if (tab === "ask") {
        return "问答";
      } else if (tab === "share") {
        return "分享";
      } else if (tab === "job") {
        return "招聘";
      }
    }
  },
  computed: {
    createAt() {
      return dayComputed(this.topic.data.create_at);
    },
  },
  created() {
    this.topicId = this.$route.params.id;
    this.getTopicContent(this.topicId);
  },
  mounted(){
    // this.$bus.$emit('getLoginName',this.topic.data.author.loginname)
    // console.log(this.topic.data.author.loginname);
    // console.log('topic',this.topic);
  }
};
</script>

<style>
.main-panel {
  margin: auto;
  margin-top: 15px;
  width: 1210px;
}

#topic-detail {
  display: flex;
}

#topic-detail a {
  color: #0088cc;
}

.topic {
  width: 70%;
  float: left;
}

.topic .title {
  /* background-color: aqua; */
  font-weight: 700;
  font-size: 22px;
}

.topic .first-piece {
  /* display: flex;
  flex-direction: column; */
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  padding: 10px;
  background-color: #f6f6f6;
  border-radius: 5px;
}

.topic .topic-info {
  padding: 10px 0;
  color: #838383;
}

.topic .topic-info .author:hover {
  text-decoration: underline;
}

.topic .topic-content {
  border-top: 1px solid #e5e5e5;
  padding: 10px;
  line-height: 1.6;
}

/* markdown样式的调整 */
.markdown-text ul {
  margin: 0 0 10px 25px;
}
.markdown-text li{
  margin-left: 25px;
  margin-top: 10px;
}
.markdown-text h1,
h2,
h3,
h4,
h5 {
  margin: 30px 0 15px;
  border-bottom: 1px solid #e5e5e5;
}
.markdown-text p {
  margin: 15px 0;
}
.markdown-text img {
  width: 100%;
  border-radius: 5px;
}

.markdown-text blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 20px;
  border-left: 5px solid #e5e5e5;
}
.markdown-text blockquote p {
  color: #333;
}
.markdown-text .language-htm {
  font-size: 14px;
  padding: 5px 15px;
  border: none;
  margin: 20px -10px;
  border-width: 1px 0;
  background-color: #e1e1e1;
  tab-size: 4;
  border-radius: 5px;
}

/* 用户面板 */
.author-panel {
  float: left;
  width: 25%;
  margin-left: 30px;
}
</style>