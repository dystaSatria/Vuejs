# Notes

* if error with @

```vue.js
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from "url";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
resolve: {
alias: [
{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
],
},
plugins: [vue()],
})


```

* For internal link : ``` <router-link to="/about">About</router-link> ```
* For external link : ``` <a href="/about">A tag About</a> ```
* Make "views" folder which will include our custom content
* Add file as jsconfig.json

```json
{

"include": [
    "./src/**/*"
],

"compilerOptions": {
"baseUrl": ".",
"paths": {
    "@/*": ["./src/*"],
}

}



}
```
