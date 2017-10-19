import Vue from 'vue';
import Router from 'vue-router';

import All from '../containers/All.vue';
import Hot from '../containers/Hot.vue';
import Cold from '../containers/Cold.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: 'all',
            component: All
        },
        {
            path: 'hot',
            component: Hot
        },
        {
            path: 'cold',
            component: Cold
        },
        {
            path: '*',
            redirect: '/home'
        }
    ],
    //更改默认的名字
    linkActiveClass: 'active'
});