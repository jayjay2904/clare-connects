import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative assets work at both jayjay2904.github.io/clare-connects/ and clareconnects.com.
  base: './',
  test: { environment: 'jsdom', setupFiles: './src/test/setup.ts', css: true, globals: true },
})
