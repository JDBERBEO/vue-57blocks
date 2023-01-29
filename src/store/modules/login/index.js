import { state } from './state';
import { actions } from './actions';
import { mutations } from './mutations';
import { MODULE_LOGIN } from './typesLogin';

export const module = {
  namespaced: true,
  state,
  actions,
  mutations,
};

export const name = MODULE_LOGIN;
