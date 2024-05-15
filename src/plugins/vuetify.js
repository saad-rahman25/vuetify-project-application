/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

export default createVuetify({
  theme: {
    defaultTheme: 'dark',
  },
  defaults: {
    VBtn: { variant: "outlined"},
    VTextField: {variant: "solo"}
  }
})

// note global config will work for everything the v-main
