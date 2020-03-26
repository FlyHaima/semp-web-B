<template>
  <div id="pageHeader" class="page-header">
    <el-button v-show="theme=='light'" @click="changeT('dark')" type="primary">浅色（点击切换深色主题）</el-button>
    <el-button v-show="theme=='dark'" @click="changeT('light')" type="primary">深色（点击切换浅色主题）</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: 'dark'
    }
  },
  created () {
    this.checkPage()
  },
  methods: {
    changeTheme (theme) { // 修改主题
      console.log(`on data-theme${theme}`)
      window.document.documentElement.setAttribute('data-theme', 'theme' + theme)
    },
    checkPage () {
      const urlStrs = window.location.href.split('/')
      if (urlStrs.includes('pageA')) {
        this.changeTheme(0)
      } else {
        this.changeTheme(1)
      }
    },
    changeT (theme) {
      this.theme = theme
      document.getElementsByTagName('body')[0].setAttribute('class', 'theme-' + theme)
    }
  },
  watch: {
  },
  mounted () {
  }
}
</script>

<style scope lang="scss">
.page-header{
  height: 65px;
  @include header_bg($header-background-theme0);
  @include themify($themes) {
    background: themed('background-color');
  }
}
</style>
