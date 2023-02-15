import Vuex from 'vuex';
import User from './User/moduleUser.js';

export default new Vuex.Store({
    modules:{
        user:User
    }
});
