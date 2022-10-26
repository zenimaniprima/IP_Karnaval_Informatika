import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
    css: [
        'primevue/resources/themes/lara-dark-teal/theme.css',
        'primevue/resources/primevue.css',
        'primeicons/primeicons.css',
        'primeflex/primeflex.css'
    ],
    build: {
        transpile: ['primevue']
    }
})