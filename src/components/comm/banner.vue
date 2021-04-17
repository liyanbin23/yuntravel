<template>
  <div class='container'>
    <!-- 幻灯片 -->
    <el-carousel :interval='5000' arrow='always' type='card'>
      <el-carousel-item v-for='(item, index) in banners' :key='index'>
        <!-- <img :src="item.url" /> -->
        <img src="@/assets/banners/05.jpeg" />
      </el-carousel-item>
    </el-carousel>

  </div>
</template>

<script>
export default {
    data () {
        return {
            // 轮播图数据
            banners: [{ url: 'http://157.122.54.189:9095/assets/images/th01.jfif', desc: 'liyb' }, { url: 'http://157.122.54.189:9095/assets/images/th02.jfif', desc: 'liyb' }, { url: '@/assets/banners/03.jpeg', desc: 'liyb' }, { url: '@/assets/banners/04.jpeg', desc: 'liyb' }, { url: '@/assets/banners/05.jpeg', desc: 'liyb' }]
        }
    },
    methods: {

    }
}
</script>

<style scoped lang='less'>
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
  background: #fff;
  /deep/ .el-carousel__container {
    height: 300px;

    img{
     display: block;
     width: 100%;
    }
  }

}
</style>
