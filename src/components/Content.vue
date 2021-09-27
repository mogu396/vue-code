<template>
  <!-- 主题内容 -->
  <div>
    <div class="topics-content" v-for="item in contentList.data" :key="item.id">
      <img :src="item.author.avatar_url" alt="用户头像" />
      <!-- 回复相关数据 -->
      <span class="count-property">
        <em class="count-of-replies">{{ item.reply_count }}</em>
        <span class="count-of-seperator">/</span>
        <span class="count-of-visits">{{ item.visit_count }}</span>
      </span>
      <!-- 标签 -->
      <span
        :class="[
          item.top === true || item.tab === 'good'
            ? 'topic-topAndGood-tag'
            : 'topic-else-tag',
        ]"
        >{{ listTagComputed(item.top, item.tab) }}</span
      >
      <span class="title">{{ item.title }}</span>

      <span class="latest-reply-time">{{
        $dayjs().diff(item.last_reply_at, 'day')>=1?
        $dayjs().diff(item.last_reply_at, 'day') + '天前':
        '1天前'
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content",
  data() {
    return {};
  },
  props: ["contentList"],
  methods: {
    listTagComputed(top, tab) {
      // console.log(this);
      // console.log(top,tab);
      if (top === true) {
        return "置顶";
      } else {
        if (tab === "ask") {
          return "问答";
        } else if (tab === "share") {
          return "分享";
        } else if (tab === "job") {
          return "招聘";
        } else if (tab === "good") {
          return "精华";
        }
      }
    },
  },
};
</script>

<style scoped>
.topics-content {
  position: relative;
  margin-bottom: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 5%);
}

.topics-content > img {
  width: 30px;
  height: 30px;
}

/* 人数模块布局 */
.count-property {
  display: inline-block;
  width: 75px;
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
  display: inline-block;
  margin-left: 5px;
  width: 70%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 日期 */
.latest-reply-time {
  position: absolute;
  float: right;
  top:20%;
  right: 3%;
}
</style>