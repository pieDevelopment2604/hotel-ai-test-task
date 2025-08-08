import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/hotel-ai-test-task/', // <-- This line is crucial!
  plugins: [react()],
})
