<template>
  <div class="container">
    <label style="font-size:20px; margin: 20px auto;" for="title">
      标题：
    </label>
      <el-input
        v-model="title"
        size="medium"
        type="textarea"
        label="title"
        autosize
        clearable="true"
        style="width: 75%"
      ></el-input>
    <quill-editor
      ref="myTextEditor"
      v-model="content"
      :options="editorOption"
      style="height: 2000px; width: 80%; margin: 20px auto 100px auto;"
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
  margin: 0 auto;
  position: relative;
  padding: 0 auto;
}
</style>
