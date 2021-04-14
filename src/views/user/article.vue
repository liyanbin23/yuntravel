<template>
  <div class="container">
    <!-- 幻灯片 -->
    <span>京ICP备08001421号 京公网安备110108007702 Copyright © 2016-2019 旅想者 All Rights Reserved</span>
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
