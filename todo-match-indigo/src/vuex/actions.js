import {ADD_COLLECT, REMOVE_COLLECT} from './mutation-types.js';
export const actions = {
    add_note(context){
        context.commit();
    },
    localStorage_to_state(context) {
        var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
        todos.forEach(function (todo, index) {
            todo.id = index
        });
        var uid = todos.length;
        context.commit('LOCALSTORAGE_TO_STATE', todos, uid);
        // todoStorage.uid = todos.length
        // console.log(todos, '78*********');
        // return todos
    },
    state_to_localstorage(context){
        localStorage.setItem(STORAGE_KEY, JSON.stringify(context.$store.state.todos));
    },
};