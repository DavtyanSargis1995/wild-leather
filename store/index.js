import {auth} from '@/services/firebase';
import {getUserFromCookie, getUserFromSession} from '@/helpers'

export const state = () => ({
  locales: ['en', 'am', 'ru'],
  locale: 'en',
});

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
};

export const actions = {
  nuxtServerInit({commit}, {req}) {

    const user = getUserFromCookie(req);
    if (user) {
      commit('users/SET_USER', user);
    }
    // commit('setLoading', false);
  }
}
