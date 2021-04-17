<template>
  <div class="container">
    <!-- 幻灯片 -->
    <span>快来分享你的文章吧</span>
    <article-edit></article-edit>
  </div>
</template>

<script>
import ArticleEdit from '../../components/comm/articleEdit.vue'
export default {
    components: {
        ArticleEdit
    },
    data () {
        return {}
    },
    methods: {}
}
</script>

<style scoped lang='less'>
.container {
  min-width: 1000px;
  margin: 0 auto;
  position: relative;
}
</style>
