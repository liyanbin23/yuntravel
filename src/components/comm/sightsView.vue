<template>
  <div id="content">
    <el-card :body-style="{ padding: '0px' }">
      <img src="@/assets/banners/04.jpeg" class="image" />
      <div style="padding: 14px">
        <span>{{ detal }}</span>
        <time class="time">{{ currentDate }}</time>
        <div class="bottom clearfix">
          <i class="el-icon-view">{{ viewes }}</i>
          <span v-if="true" class="icon iconfont icon-dianzan">{{
            likes
          }}</span>
          <span v-if="true" class="icon iconfont icon-guanzhuxuanzhong">{{
            collector
          }}</span>
          <!-- <el-button type="text" class="button">操作按钮</el-button> -->
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
    props: {
    // 图片路径
        imgUrl: {
            type: String,
            default: ''
        },
        // 简介
        detal: {
            type: String,
            default: '我们可以选择手动修复，初期或许不熟练，慢慢就孰能生效了。不过有时候我们要拷贝一些代码，锁紧，空格，单双引号等等问题就很多，这个时候就需要配置eslint自动错误修复功能了。'
        },
        // 浏览量
        viewes: {
            type: Number,
            default: 0
        },
        // 点赞量
        likes: {
            type: Number,
            default: 0
        },
        // 收藏量
        collector: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            currentDate: new Date()
        }
    },
    methods: {}
}
</script>
<style>
/* #content {
    width: 80px;
    height: 140px;
    color: #42b983;
}
 #img {
    width: 80px;
    height: 50px;
  } */
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.bottom span {
  margin-left: 10px;
  font-size: 20px;
  padding: 0;
  float: right;
}
.bottom i {
  margin-left: 10px;
  font-size: 20px;
}

/* .button {
    padding: 0;
    float: right;
  } */

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>
