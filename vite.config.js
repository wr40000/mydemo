// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "./",
  server: {
    host: "localhost",
    // open: true,
    port: 3000,
    proxy: {
      '/api1': {
        target: "http://localhost:5000",
        changeOrigin: true,
        rewrite: (path) => path.replace('^/api1', ''),
      },
    },
  }
})