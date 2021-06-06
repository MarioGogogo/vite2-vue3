import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { viteMockServe } from 'vite-plugin-mock';
// https://vitejs.dev/config/
export default defineConfig({
  /* 别名设置*/
  alias:{
     "@":path.resolve(__dirname,'src'),
     "comps":path.resolve(__dirname,'src/components'),
     "apis":path.resolve(__dirname,'src/apis'),
     "views":path.resolve(__dirname,'src/views'),
     "styles":path.resolve(__dirname,'src/styles'),
     "plugins":path.resolve(__dirname,'src/plugins'),
  },
   /* css预处理*/
  css:{

  },
  esbuild:{},
  plugins: [vue(), viteMockServe({
    // default
    supportTs:false
  }),]
})
