import Vue from 'vue';
import Vuex from 'vuex';

import users from './modules/users';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  modules: {
    users,
  },
});
