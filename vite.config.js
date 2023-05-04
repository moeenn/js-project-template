import { defineConfig } from "vite"
import path from "node:path"
import process from "node:process"

export default defineConfig({
  test: {
    watch: false,
    exclude: ["node_modules"]
  },  
  resolve: {
    alias: {
      "#src": path.resolve(process.cwd(), "./src"),
    },
  },
})
