export const MODULE_LOGIN = '@module/login';

export const typesLogin = {
  PATH: `${MODULE_LOGIN}`,
  getters: {},
  actions: {
    LOGIN_VALIDATION: '@actions/loginValidation',
    UPDATE_HAS_TOKEN: '@actions/updateHasToken',
  },
  mutations: {
    SET_LOGIN_ERROR: '@mutations/setLoginError',
    SET_HAS_TOKEN: '@mutations/setHasToken',
  },
};

export default {};
