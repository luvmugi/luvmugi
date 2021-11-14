<template>
      <el-menu
    :default-active="this.$router.path"
    class="el-menu-demo"
    mode="horizontal"
    background-color="unset"
    text-color="#fff"
    router
    active-text-color="#fffffb"
    @select="handleSelect"
  >
    <el-menu-item index="/AboutJS">javascript基础</el-menu-item>
    <el-menu-item index="/AboutVue">VUE</el-menu-item>
    <el-menu-item index="/AboutThree">three.Js</el-menu-item>
    <!-- <el-menu-item index="/AboutPlugin">插件</el-menu-item> -->
    <el-menu-item index="/AbouEexperience">杂项</el-menu-item>
  </el-menu>
</template>
<script>

export default {
	name: 'menu',
	// mounted() {
	// 	console.log(process.env.VUE_APP_BASE_API)
	// },
}
</script>
