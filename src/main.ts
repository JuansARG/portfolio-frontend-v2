import { createApp } from 'vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.js';
import 'vue3-toastify/dist/index.css';
import { login } from './helpers/login';


const app = createApp(App);

login();

VueQueryPlugin.install(app, {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                cacheTime: 1000 * 320,
                refetchOnReconnect: 'always',
            }
        }
    }
});

app.use(bootstrap);

app.use(
    Vue3Toasity,
    {
        autoclose: 3000,
    } as ToastContainerOptions,
);

app.mount('#app');
