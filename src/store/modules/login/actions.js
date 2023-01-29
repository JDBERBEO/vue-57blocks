/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import loginDb from '@/constants/loginDb';
import router from '@/router';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuidv4 } from 'uuid';
import { typesLogin as types } from './typesLogin';

export const actions = {
  [types.actions.LOGIN_VALIDATION]({ commit }, payload) {
    const { email, password } = payload;
    loginDb.map((user) => {
      if (user.email === email && user.password === password) {
        const token = uuidv4();
        localStorage.setItem('token', token);
        commit(types.mutations.SET_LOGIN_ERROR, false);
        return router.push('/');
      }
      return commit(types.mutations.SET_LOGIN_ERROR, true);
    });
  },
};
export default {};
