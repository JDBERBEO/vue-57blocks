import { typesLogin as types } from './typesLogin';

export const mutations = {
  [types.mutations.SET_LOGIN_ERROR](state, payload) {
    state.loginError = payload;
  },
  [types.mutations.SET_HAS_TOKEN](state, payload) {
    state.hasToken = payload;
  },
};
export default {};
