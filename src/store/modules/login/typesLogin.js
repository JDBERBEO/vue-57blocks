export const MODULE_LOGIN = '@module/login';

export const typesLogin = {
  PATH: `${MODULE_LOGIN}`,
  getters: {},
  actions: {
    LOGIN_VALIDATION: '@actions/loginValidation',
  },
  mutations: {
    SET_LOGIN_ERROR: '@actions/loginError',
  },
};

export default {};
