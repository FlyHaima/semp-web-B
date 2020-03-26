<template>
  <el-container>
    <el-header height="64px;">
      <index-header></index-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <index-aside></index-aside>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import IndexHeader from '@/components/header'
import IndexAside from '@/components/aside'

export default {
  name: 'indexPage',
  data () {
    return {
      msg: 'Welcome to index page'
    }
  },
  components: {
    'index-header': IndexHeader,
    'index-aside': IndexAside
  }
}
</script>

<style lang="scss">
html, body{
  min-height: auto;
}
>>>html>body{
  display: block !important;
  background-color: #fff !important;
}
.el-header{
  padding: 0 !important;
}
</style>
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
