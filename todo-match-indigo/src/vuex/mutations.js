import {ADD_COLLECT, REMOVE_COLLECT} from './mutation-types';
export const mutations = {
    [ADD_NOTE](state, t){
        if(Object.prototype.toString.call(t) != '[object Object]'){
            console.error('t paramenter must be a Object instance, but others got.');
        }else{
            state.list.push(t);
        }
    },
    [SAVE_NOTE](state){
        state
    }
}