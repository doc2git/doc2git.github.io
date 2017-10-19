import Vue from 'vue';
import vueRouter from 'vue-router';

import Note from './src/Note.vue';
import router from './src/router';

//使用vuex，来优化跨组件数据传递
import Vuex from 'vuex';

Vue.use(Vuex);

const mutations = {
    change(state, todo) {
        state.todos = state.todos.push(todo);
    }
};

const state = {
    uid: 0,
    todos: [],
};

const getters = {
    computedTodos(state) {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
            todo.id = index
        });
        return todos;
    },
    computedUid(state) {
        return state.todos.length;
    }
};

let store = new Vuex.store({
    state,
    mutations, //管理状态
    getters
});

new Vue({
    render: h => h(Note)
    // store, //会在实例上生成一个属性 this.$store
}).$mount('#note');

// new Vue({
//
// });