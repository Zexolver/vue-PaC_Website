// src/main.js

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Import your global CSS files
import './assets/styles.css'
import './assets/nav_styles.css'
import './assets/transition_styles.css'

const app = createApp(App)

app.use(router)

app.mount('#app')
