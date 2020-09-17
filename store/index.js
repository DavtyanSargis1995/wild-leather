import {auth, database, db} from '@/helpers/firebase'

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

  SET_USER: (state, user) => state.authUser = user,
  ID_TOKEN: (state, idToken) => state.idToken = idToken,
};

export const actions = {
  nuxtServerInit({dispatch}){
    console.log(process);
    if (process.client) {
      dispatch('auth');
    }
  },
  auth: ({ commit }) => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return commit('SET_USER', null)
      }
      user
        .getIdToken(true)
        .then(
          (idToken) => {
            commit('ID_TOKEN', idToken)
            commit('SET_USER', {
              name: user.displayName,
              email: user.email
            })
            console.log($nuxt.$router);
            // $nuxt.$router.push('/admin')
          }
        )
    })
  },
  logout: ({ commit }) => {
    commit('SET_USER', null)
    auth.signOut().then(() => {
      // localStorage.setItem('authenticated', false)
    })
    $nuxt.$router.push('/login');
  },
}

export const getters = {
  isLoggedIn: state => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  },
  locale: state => state.locale,
  user: state => state.authUser
};


