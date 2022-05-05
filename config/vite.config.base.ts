import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@', 
        replacement: resolve(__dirname, '../src')
      }, 
      {
        find: 'asserts', 
        replacement: resolve(__dirname, '../src/asserts')
      }, 
      {
        find: 'vue', 
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      }
    ], 
    extensions: ['.ts', '.js'], 
  },
  define: {
    'process.env': {}, 
  }, 
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `ture;  @import (reference) "${resolve(
            'src/assets/style/breakpoint.less' 
          )}"`
        }, 
        javascriptEnable: true
      }
    }
  }
});


