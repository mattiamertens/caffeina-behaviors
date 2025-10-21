import { defineConfig } from 'vite'

export default defineConfig({
  // 1. Set the 'root' to your project folder
  //   root: 'Caffeina2/',

  // 2. Set the 'base' to your GitHub repository name
  //    (e.g., if your repo is 'https://github.com/user/my-project')
  //    set base to '/my-project/'
  base: '/caffeina-behaviors/',

  // 3. Set the build output directory
  //    This tells Vite to put the 'dist' folder in the root,
  //    which is what GitHub Pages expects.
  build: {
    outDir: 'dist'
  }
})