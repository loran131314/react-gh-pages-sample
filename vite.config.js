import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	// 開發中(npm run dev)、產品路徑(npm run build)，{建議路徑分開設定}
	base: process.env.NODE_ENV === 'production' ? '/react-gh-pages-sample/' : '/',
  plugins: [react()],
})
