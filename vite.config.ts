import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
// export default ({ mode }) => {
// const env = loadEnv(mode, process.cwd())
//
// const envWithProcessPrefix = Object.entries(env).reduce((prev, [key, val]) => {
//   return {
//     ...prev,
//     ['process.env.' + key]: `"${val}"`,
//   }
// }, {})

export default defineConfig({
  // return defineConfig({
  plugins: [react()],
  // define: envWithProcessPrefix,
  server: { host: '0.0.0.0', port: 3000 },
  preview: { port: 3000 },
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src/'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
    },
  },
})
// }
