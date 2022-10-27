import AosVue from "aos-vue";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.component("AosVue", AosVue);
  });