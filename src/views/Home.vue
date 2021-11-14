<template>
    <el-container class="layout-container ">
      <el-header> 
        <Menu></Menu>
      </el-header>
      <el-container>
     <!--    <el-aside width="200px">Aside</el-aside> -->
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer> 
            <div>   
             <Message style="width: 1em; height: 1em" />  
            luvmugi@163.com
            </div>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
// import { Menu } from '@/components/Menu.vue'
import Menu from '../components/menu/Menu.vue'
import {Message} from '@element-plus/icons'
export default {
	name: 'Home',
	components: {
      Menu,
      Message
	},
	mounted() {
		console.log(process.env.VUE_APP_BASE_API)
	},
}
</script>
<style scoped>
@import url('../assets/css/global.css');
</style>