import {auth} from '@/services/firebase';
import Cookies from 'js-cookie'

export const state = () => ({
  user: null,
});

export const mutations = {
  SET_USER: (state, account) => {
    state.user = account;
  }
};

export const actions = {
  async signUserUp ({ commit }, payload) {
    // commit('setLoading', true, { root: true });
    // commit('clearError', null, { root: true });
    let user = null;
    try {
      await auth.createUserWithEmailAndPassword(payload.email, payload.password);
      // commit('setLoading', false, { root: true });
      user = auth.currentUser;
      await user.sendEmailVerification();
      await user.updateProfile({
        displayName: payload.name
      });
      // commit('setStatus', 'success');
    } catch (error) {
      // commit('setLoading', false, { root: true });
      // commit('setError', error.message, { root: true });
    }
  },
  async signUserIn ({ commit }, payload) {

    debugger;
    // commit('setLoading', true, { root: true });
    // commit('clearError', null, { root: true });
    try {
      let user = null;
      await auth.signInWithEmailAndPassword(payload.email, payload.password);
      // commit('setLoading', false, { root: true });
      // commit('setStatus', 'success');
      user = auth.currentUser;

      const token = await auth.currentUser.getIdToken(true);

      console.log(token);

      debugger;

      console.log('user');
      // if (!user.emailVerified) {
      //   commit('setVerified', false);
      //   return;
      // }
      const newUser = {
        id: user.uid,
        name: user.displayName,
        email: user.email
      };

      Cookies.set('access_token', token);
      commit('SET_USER', newUser);
      // commit('setVerified', true);
      $nuxt.$router.push('/admin')

    } catch (error) {
      // commit('setLoading', false, { root: true });
      // commit('setError', error.message, { root: true });
    }
  },
  autoSignIn ({ commit }, payload) {
    // if (!payload.emailVerified) {
    //   return;
    // }
    commit('SET_USER', {
      id: payload.uid,
      name: payload.displayName,
      email: payload.email
    });

    // commit('setVerified', true);
  },
  // async resetPasswordWithEmail ({ commit }, payload) {
  //   const { email } = payload;
  //   commit('setLoading', true, { root: true });
  //   commit('clearError', null, { root: true });
  //   try {
  //     await firebase.auth.sendPasswordResetEmail(email);
  //     commit('setLoading', false, { root: true });
  //     return Promise.resolve('Please check you email to reset your password');
  //   } catch (error) {
  //     commit('setLoading', false, { root: true });
  //     commit('setError', error.message, { root: true });
  //   }
  // },
  logout ({ commit }) {
    debugger;
    auth.signOut();
    commit('SET_USER', null);
    Cookies.remove('access_token');
    $nuxt.$router.push('/')
  }
};

export const getters = {
  isLoggedIn: state => state.user
};
