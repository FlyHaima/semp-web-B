<template>
  <div class="page-a">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'pageA',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.page-a{
  position: absolute;
  width: 100%;
  min-height: 100%;
}
</style>
