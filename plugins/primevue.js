import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Toast from "primevue/toast";
import ToastService from 'primevue/toastservice';
import Ripple from 'primevue/ripple';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue, {ripple: true});
    nuxtApp.vueApp.use(ToastService);
    nuxtApp.vueApp.component('Button', Button);
    nuxtApp.vueApp.component('InputText', InputText);
    nuxtApp.vueApp.component('Card', Card);
    nuxtApp.vueApp.component('Toast', Toast);
    nuxtApp.vueApp.directive('ripple', Ripple);
    //other components that you need
});
