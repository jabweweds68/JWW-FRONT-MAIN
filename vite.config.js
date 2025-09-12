
import { defineConfig } from 'vite';
export default defineConfig({
  root: 'src', // 
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
    rollupOptions: {
      input: {
    index: 'src/index.html',
    About: 'src/About.html',
    contact: 'src/contact.html',
    products: 'src/product-page.html',
    
      }
    }
  },
});