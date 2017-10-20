export const mutations = {
    ADD_NOTE(state, todo){
        if(Object.prototype.toString.call(todo) != '[object Object]'){
            console.error('todo paramenter must be a Object instance, but others type got.');
        }else{
            state.list.push(todo);
        }
    },
    LOCALSTORAGE_TO_STATE(state, todos, uid) {
        if (Object.prototype.toString.call(todos) != '[object Object]') {
            console.error('todos paramenter must be a Object instance, but others type got.');
        } else {
            state.todos = Object.assign({}, todos);
            state.uid = uid;
        }
    }
}
