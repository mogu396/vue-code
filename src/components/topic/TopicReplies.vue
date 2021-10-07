<template>
  <div class="topic-replies" v-if="topic.data.reply_count">
    <div class="reply-count">回复数:{{ topic.data.reply_count }}</div>
    <div
      class="reply-item"
      v-for="(item, index) in topic.data.replies"
      :key="item.id"
    >
      <img :src="item.author.avatar_url" :alt="item.author.loginname" />
      <router-link class="reply-loginname" :to="{ path: `/user/${item.author.loginname}` }">
        <span>{{ item.author.loginname }}</span>
      </router-link>
      <span class="reply-time">{{ index + 1 }}楼·{{replyTime(item.create_at)}}</span>
      <div class="reply-content" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
import {dayComputed} from '../../utils/utils'
export default {
  name: "TopicReplies",
  props: ["topic"],
  data() {
    return {
      count: 0,
    };
  },
  methods:{
      replyTime(time){
          return dayComputed(time)
      }
  },
};
</script>

<style scoped>
.topic-replies {
  background-color: #f6f6f6;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 1px 1px 6px rgb(0 0 0 / 20%);
  padding: 10px;
}

.reply-count {
  font-weight: 700;
  padding-bottom: 10px;
}
.reply-item {
  border-top: 1px solid #e5e5e5;
  padding: 10px 0;
}

.reply-item img {
  width: 30px;
  height: 30px;
}

/* 回复名 */
.reply-item .reply-loginname {
  vertical-align: top;
  padding-left: 5px;
  font-size: 12px;
  color: #666 !important;
}
.reply-item .reply-loginname:hover {
  text-decoration: underline;
}

.reply-item .reply-time {
  vertical-align: top;
  padding-left: 5px;
  font-size: 12px;
}

.reply-content .markdown-text p{
  margin: 0 !important;
}

/* .reply-item .reply-content{
  padding: 10px;
} */
</style>