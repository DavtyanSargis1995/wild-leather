// import Cookies from 'js-cookie'
// const COOKIE_NAME = '__session'
//
// export const state = () => ({
//   locales: ['en', 'am', 'ru'],
//   locale: 'en',
//   user: null,
// });
//
// export const mutations = {
//   SET_LANG (state, locale) {
//     if (state.locales.includes(locale)) {
//       state.locale = locale
//     }
//   },
//   SET_USER (state, user) {
//     state.user = user;
//   }
// };
//
// export const getters = {
//   IS_AUTHENTICATED: state => !!state.user,
// };
//
// let initialized = false;
//
// export const actions = {
//   nuxtServerInit: (process.server && !process.static) ? async function({ commit }, {req, store} ) {
//
//     if(!req.headers.cookie) return;
//     const admin = await import('firebase-admin');
//
//
//     console.log(admin.credential.applicationDefault());
//     if(!admin.apps.length) {
//       admin.initializeApp({
//         credential: admin.credential.applicationDefault(),
//         databaseURL: "https://my-project-1527060076661.firebaseio.com"
//       });
//     }
//
//     const cookie = await import('cookie');
//     const parsedCookies = cookie.parse(req.headers.cookie);
//
//     if(!parsedCookies) return;
//
//     const idToken = parsedCookies[COOKIE_NAME];
//
//     const JWTDDecode = (await import('jwt-decode')).default;
//     let decodedAuthUserClaims = null;
//     try {
//       decodedAuthUserClaims = JWTDDecode(idToken);
//     } catch {}
//
//     if(decodedAuthUserClaims == null) return;
//
//     try {
//       const decodedToken = await admin.auth().verifyIdToken(idToken, true);
//
//       const uid = decodedToken.uid;
//
//       if(uid) {
//         const user = {
//           photoUrl: decodedAuthUserClaims.picture,
//           displayName: decodedAuthUserClaims.name,
//           email: decodedAuthUserClaims.email,
//           uid: decodedAuthUserClaims.user_id
//         };
//         store.commit('SET_USER', user);
//       }
//     } catch(er) {
//         console.log(er)
//     }
//   } : () => {},
//
//   SET_SESSION_COOKIE (ctx, idToken) {
//     const secure = process.env.NODE_ENV === 'production';
//     let expires = 0;
//     if (idToken) {expires = 3600; }
//     Cookies.set(COOKIE_NAME, idToken, {
//       expires,
//       secure
//     })
//   }
//
// };
