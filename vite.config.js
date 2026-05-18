import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  allowedHosts: ['"techborg-main.onrender.com"','techborg.in']
})
