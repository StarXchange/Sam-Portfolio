import { defineConfig } from 'vite'
 import react from '@vitejs/plugin-react'
 import tailwindcss from '@tailwindcss/vite'
 import autoprefixer from 'autoprefixer';


// https://vite.dev/config/
export default defineConfig({
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths to match your project structure
  ],
   plugins: [
     react(),
     tailwindcss(),
     autoprefixer(),
   ],

})
