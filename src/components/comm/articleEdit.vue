<template>
  <div class="container">
    <el-input v-model="title" size='medium'></el-input>
    <quill-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"
      style="height: 2000px; width:80%; margin-botton:40px;"

    ></quill-editor>
  </div>
</template>

<script>
import { addQuillTitle } from '../../assets/js/quill-title.js'
export default {
    data () {
        return {
            title: '',
            content: '',
            editorOption: {}
        }
    },
    mounted () {
        addQuillTitle()
    },
    methods: {
        onEditorChange ({ editor, html, text }) {
            this.content = html
        }
    }
}
</script>

<style scoped lang='less'>
.container {
  margin: 10px 20px;
  position: relative;
  align-content: center;
}
</style>
