<template>
  <div class="login-page-b">
    <div class="bg-box">
      <div class="login-box">
        login
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginB',
  data () {
    return {
    }
  },
  mounted () {
    this.setRem()
    window.addEventListener('load', this.setRem)
    window.addEventListener('resize', this.setRem)
  },
  methods: {
    setRem () {
      var whdef = 100 / 1920 // 表示1920的设计图,使用100PX的默认值
      var bodyWidth = document.body.clientWidth // 当前窗口的宽度
      var rem = bodyWidth * whdef // 以默认比例值乘以当前窗口宽度,得到该宽度下的相应FONT-SIZE值
      document.getElementsByTagName('html')[0].style.fontSize = rem + 'px'
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
</style>
