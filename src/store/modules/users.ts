import { RootState } from '../types';
import { Commit, GetterTree, MutationTree, ActionTree } from 'vuex';

export interface UsersState {
  token: string;
  isLogin: boolean;
  isNetwork: boolean;
}


const state: UsersState = {
  token: '',
  isLogin: false,
  isNetwork: true,
};

const getters: GetterTree<UsersState, RootState> = {
  IsLogin(state): boolean {
    return state.isLogin;
  },
  Token(state): string {
    return state.token;
  },
  IsNetwork(state): boolean {
    return state.isNetwork;
  },
};

const mutations: MutationTree<UsersState> = {
  ISLOGIN_MODIFY(state, value: boolean) {
    return state.isLogin = value;
  },
  ISNETWORK_MODIFY(state, value: boolean) {
    return state.isNetwork = value;
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
  state,
  getters,
  actions,
  mutations,
};
