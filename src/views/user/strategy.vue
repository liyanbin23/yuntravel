<template>
  <div class="cont">
    <el-main>
      <Video></Video>
      <el-row type="flex" :gutter="20">
        <el-col :span="20">
          <el-row type="flex" :gutter="20">
            <el-col :span="13">
              <el-menu
                default-active="0"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
              >
                <el-menu-item index="0">全部</el-menu-item>
                <el-menu-item index="1">昆明</el-menu-item>
                <el-menu-item index="2">大理</el-menu-item>
                <el-menu-item index="3">丽江</el-menu-item>
                <el-menu-item index="4">楚雄</el-menu-item>
                <el-menu-item index="5">瑞丽</el-menu-item>
                <el-menu-item index="6">西双版纳</el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="10">
              <el-input
                v-model="context"
                placeholder="搜索城市"
                prefix-icon="el-icon-search"
                clearable
                @keyup.enter.native="search()"
                style="margin: 15px 20px auto auto"
              />
            </el-col>
          </el-row>
          <el-row type="flex" :gutter="20">
            <waterfall :col="2" :data="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]">
              <template>
                <div
                  class="content"
                  v-for="(item, index) in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]"
                  :key="index"
                >
                  <SightsView :imgUrl="item.imaUel" />
                </div>
              </template>
            </waterfall>
          </el-row>
        </el-col>
        <el-col :span="4" style="background: #67c23a"> </el-col>
      </el-row>
    </el-main>
  </div>
</template>
<script>
import Video from '@/components/comm/video.vue'
import SightsView from '@/components/comm/sightsView.vue'
export default {
    components: {
        Video,
        SightsView
    },
    data () {
        return {
            data: [],
            option: [{}],
            context: ''
        }
    },
    computed: {
        itemWidth () {
            return 138 * 0.5 * (document.documentElement.clientWidth / 375)
            // #rem布局 计算宽度
        },
        gutterWidth () {
            return 9 * 0.5 * (document.documentElement.clientWidth / 375)
            // #rem布局 计算x轴方向margin(y轴方向的margin自定义在css中即可)
        }
    },
    // 下边的内容没有用到，需要的小伙伴可以看文档了解，如果需求后续回更新
    methods: {
        handleSelect (key, keyPath) {
            console.log(key, keyPath)
        },
        scroll (scrollData) {
            console.log(scrollData)
        },
        switchCol (col) {
            this.col = col
            console.log(this.col)
        },
        search () {
            this.searchContext = this.context
        },
        loadmore (index) {
            this.data = this.data.concat(this.data)
        }
    }
}
</script>
<style>
.cont {
  width: 100%;
  height: auto;
  background: #fff;
}
.content {
  margin-left: 1vw;
  margin-top: 2vh;
}
</style>
