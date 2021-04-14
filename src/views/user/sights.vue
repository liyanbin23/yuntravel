<template>
  <div class="cont">
    <el-main>
      <Banner></Banner>
      <el-row type="flex" :gutter="20">
        <el-col :span="20">
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
import Banner from '@/components/comm/banner.vue'
import SightsView from '@/components/comm/sightsView.vue'
export default {
    components: {
        Banner,
        SightsView
    },
    data () {
        return {
            data: [],
            option: [{}]
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
        scroll (scrollData) {
            console.log(scrollData)
        },
        switchCol (col) {
            this.col = col
            console.log(this.col)
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
}
.content {
  margin-left: 1vw;
  margin-top: 2vh;
}
</style>
