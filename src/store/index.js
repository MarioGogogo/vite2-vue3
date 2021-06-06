import { createStore } from 'vuex';

const store = createStore({
  state: {
    couter: 0,
  },
  mutations:{
     add(state){
       state.couter++
     }
  }
});


export default store