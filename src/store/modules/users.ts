import {
  Commit, GetterTree, MutationTree, ActionTree,
} from 'vuex';
import { RootState, UsersState } from '../types';

const data: UsersState = {
  token: '',
  isLogin: false,
  isNetwork: true,
};

const getters: GetterTree<UsersState, RootState> = {
  isLogin: (state): boolean => state.isLogin,
  token: (state): string => state.token,
  isNetwork: (state): boolean => state.isNetwork,
};

const mutations: MutationTree<UsersState> = {
  ISLOGIN_MODIFY(state, value: boolean) {
    state.isLogin = value;
  },
  ISNETWORK_MODIFY(state, value: boolean) {
    state.isNetwork = value;
  },
};

const actions: ActionTree<UsersState, RootState> = {
  IsLoginModify(context: { commit: Commit }, value: string) {
    return context.commit('ISLOGIN_MODIFY', value);
  },
  IsNetworkModify(context: { commit: Commit }, value: boolean) {
    return context.commit('ISLOGIN_MODIFY', value);
  },
};

export default {
  namespaced: true,
  state: data,
  getters,
  actions,
  mutations,
};
