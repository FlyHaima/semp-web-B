<template>
  <div class="page-b">
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
.page-b{
  position: absolute;
  width: 100%;
  min-height: 100%;
}
</style>
