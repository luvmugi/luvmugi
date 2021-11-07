import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/

//是否为生产环境
const IS_PRODUCTION = process.env.NODE_ENV === "production";
  console.log(IS_PRODUCTION);
export default defineConfig({
  plugins: [vue()], 
  // 生产环境与开发环境指定不同的 URL 静态文件前缀

  resolve: {
    alias: { '@': path.resolve(__dirname, 'src') },
  },
   build: {
    //编译目录
    outDir: "../public/dist",
    //编译时是否自动清空目录
    emptyOutDir: true,
  } 
})
