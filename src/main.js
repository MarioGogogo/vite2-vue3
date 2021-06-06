import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import './styles/index.scss';

import vant from './plugins/element3';

 createApp(App).use(router).use(store).use(vant).mount('#app');
