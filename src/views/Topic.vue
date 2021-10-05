<template>
  <div id="topic-detail">
    <div class="topic" v-if="topic">
      <div class="first-piece">
        <div class="title">{{ topic.data.title }}</div>
        <div class="topic-info">
          <span>发布于{{ createAt }}</span>
          <span> / </span>
          <span>作者:{{ topic.data.author.loginname }}</span>
          <span> / </span>
          <span>{{ topic.data.visit_count }}次浏览</span>
          <span> / </span>
          <span>来自{{ tabComputed(topic.data.tab) }}</span>
        </div>
        <div class="topic-content" v-html="topic.data.content"></div>
      </div>
    </div>

    <!-- <AuthorInfo /> -->
    <!-- <TopicReplies /> -->
  </div>
</template>

<script>
// import TopicReplies from "../components/topic/TopicReplies.vue";
// import AuthorInfo from "../components/topic/AuthorInfo.vue";
import { getTopicDetail } from "../utils/api";
import { dayComputed } from "../utils/utils";
export default {
  name: "Topic",
  components: {
    // TopicReplies,
    // AuthorInfo,
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
        console.log(this.topic);
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
    },
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
};
</script>

<style scoped>
#topic-detail {
  display: flex;
  margin-top: 10px;
}

.topic {
  width: 70%;
  float: left;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  padding: 10px;
  background-color: #f6f6f6;
}

.topic .title {
  /* background-color: aqua; */
  font-weight: 700;
  font-size: 22px;
}

.topic .first-piece {
  display: flex;
  flex-direction: column;
}
</style>