import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import "vue3-toastify/dist/index.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import Vue3Toastify, { toast } from "vue3-toastify"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

library.add(faGoogle, faSpinner)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Vue3Toastify, {
  autoClose: 3000,
  position: toast.POSITION.TOP_RIGHT
})

app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
