import { typesLogin as types } from './typesLogin';

export const mutations = {
  [types.mutations.SET_LOGIN_ERROR](state, payload) {
    state.loginError = payload;
  },
};
export default {};
