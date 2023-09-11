import App from '@/App.vue';
import { createI18n } from 'vue-i18n'
import { createApp } from 'vue';

// router
import router from "@/router/router.js";

// css, icon font
import '@/css/app.css';
import '@/css/calendar.css';
import '@/css/tailwind.min.css';
import '@mdi/font/css/materialdesignicons.css';

// scss
//import '@/scss/main.scss';
//import '@/scss/_normalize.scss';

// I18N localization
import * as localeDE from '@/locales/de.json';
import * as localeEN from '@/locales/en.json';

// Vuetify material ui
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// v-calendar
import VCalendar from 'v-calendar';
import 'v-calendar/dist/style.css';

// pinia (store)
import { createPinia } from 'pinia'

// audio visual
import { AVPlugin } from 'vue-audio-visual'

// csv/json parser
import { Papa } from 'papaparse'

// vue3+threeJS 3d loader
import vue3dLoader from "vue-3d-loader";

const messages = {
  Deutsch: localeDE,
  English: localeEN,
}

// create application with all librarys
const app = createApp(App)

router.generateRoutes(app)
app.use(createI18n({ 
  locale: 'Deutsch', // set locale
  fallbackLocale: 'English', // set fallback locale
  messages, // set translations
}))
app.use(createVuetify({
  components,
  directives,
}))
app.use(createPinia());
app.use(VCalendar, {})

app.use(AVPlugin)

app.use(Papa)

app.use(vue3dLoader)

app.mount('#app')
