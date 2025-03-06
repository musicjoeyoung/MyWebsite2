import { Plugin } from 'vite'
import { defineConfig } from 'vite'
import mdx from '@mdx-js/rollup'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx() as unknown as Plugin
  ],
  optimizeDeps: {
    include: [
      "pdfjs-dist/build/pdf.worker.min.js",
      "react-pdf",
    ],
  },
})