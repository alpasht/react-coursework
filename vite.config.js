import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    css: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
  },
})
