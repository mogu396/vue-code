<template>
  <!-- 主题内容 -->
  <div class="content">
    <div class="topics-content" v-for="item in contentList.data" :key="item.id">
      <router-link :to="{ path: `/user/${item.author.loginname}` }">
        <img
          :src="item.author.avatar_url"
          alt="用户头像"
          :title="item.author.loginname"
        />
      </router-link>
      <!-- 回复相关数据 -->
      <span class="count-property">
        <em class="count-of-replies" title="回复数">{{ item.reply_count }}</em>
        <span class="count-of-seperator">/</span>
        <span class="count-of-visits" title="点击数">{{
          item.visit_count
        }}</span>
      </span>
      <!-- 标签 -->
        <span
          :class="[
            item.top === true || item.good === true
              ? 'topic-topAndGood-tag'
              : 'topic-else-tag',
          ]"
          >{{ listTabComputed(item.top, item.tab, item.good) }}</span
        >
      <router-link :to="{path:`/topics/${item.id}`}" class="title">
        {{ item.title }}
      </router-link>
      <span class="latest-reply-time">{{ replyTime(item.last_reply_at) }}</span>
    </div>
    <div class="pagination"></div>
  </div>
</template>

<script>
import { dayComputed } from "../utils/utils";
export default {
  name: "Content",
  data() {
    return {};
  },
  props: ["contentList", "page"],
  methods: {
    listTabComputed(top, tab, good) {
      // console.log(this);
      // console.log(top,tab);
      if (top === true) {
        return "置顶";
      } else {
        if (tab === "ask" && good === false) {
          return "问答";
        } else if (tab === "share" && good === false) {
          return "分享";
        } else if (tab === "job" && good === false) {
          return "招聘";
        } else if (good === true) {
          return "精华";
        }
      }
    },
    replyTime(lastReply) {
      return dayComputed(lastReply);
    },
  },
};
</script>

<style scoped>
.content {
  position: relative;
}

.topics-content {
  position: relative;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 5%);
}

.topics-content img {
  width: 30px;
  height: 30px;
}

/* 人数模块布局 */
.count-property {
  display: inline-block;
  width: 100px;
  height: 29px;
  text-align: center;
}

/* 回复人数与分割线 */
.count-property .count-of-replies,
.count-of-seperator,
.count-of-visits {
  font-size: 12px;
  display: inline-block;
  text-align: center;
  vertical-align: super;
  /* padding-right: 2px; */
}

/* 分割线 */
.count-property .count-of-seperator {
  padding-left: 2px;
}

/* 浏览人数 */
.count-property .count-of-visits {
  color: #b4b4b4;
  padding-left: 2px;
}

/* 回复人数 */
.count-property .count-of-replies {
  color: #9e78c0;
  padding-left: 5px;
  font-size: 14px;
}

/* 标签 */
.topic-topAndGood-tag {
  width: 32px;
  height: 18px;
  vertical-align: super;
  color: #fff;
  background-color: #80bd01;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 4px 4px 2px;
  margin-left: 5px;
}

.topic-else-tag {
  width: 32px;
  height: 18px;
  vertical-align: super;
  color: #999;
  background-color: #e5e5e5;
  border-radius: 3px;
  font-size: 12px;
  padding: 2px 4px 4px 2px;
  margin-left: 5px;
}

/* 标题 */
.title {
  color: #333;
  display: inline-block;
  margin-left: 5px;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title:visited{
  color: #888;
}.title:hover{
  text-decoration: underline;
}

/* 日期 */
.latest-reply-time {
  position: absolute;
  float: right;
  top: 20%;
  right: 3%;
}
</style>