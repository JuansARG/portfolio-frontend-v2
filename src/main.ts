import { createApp } from 'vue';
import App from './App.vue';

import { VueQueryPlugin } from '@tanstack/vue-query';

import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';

const app = createApp(App);

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 180
            }
        }
    }
})

app.use(bootstrap);
app.use(
    Vue3Toasity,
    {
        autoclose: 5000,
        position: 'bottom-right'
    } as ToastContainerOptions,
);

app.mount('#app');
