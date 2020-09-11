export const state = () => ({
  locales: ['en', 'am', 'ru'],
  locale: 'en',
  authUser: null
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
  RESET_STORE: (state) => {
    state.authUser = null;
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  }
};

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  }
};

