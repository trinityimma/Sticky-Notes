import { createApp } from 'vue'
import App from './App.vue'

import "./assets/style.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon)

app.config.productionTip = false;

library.add(faUserSecret)

app.mount('#app');