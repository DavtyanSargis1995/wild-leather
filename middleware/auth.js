// export default ({ app, store, route, redirect }) => {
//   console.log('ccccccccccccc');
//
//
//
//   setTimeout(() => {
//     console.log(store.getters.isLoggedIn);
//   }, 1000);
//   if (app.$fireAuth) {
//     // console.log(store);
//     console.log('aaaaaaaaaaaaaaaaaaa');
//     console.log(route);
//     console.log('bbbbbbbbbb');
//
//
//     if (!app.$fireAuth.currentUser && route.name && route.path.startsWith('/admin')) {
//       return redirect('/login')
//     }
//     // INFO -> Firebase Services can be accessed with app.$fireAuth (etc.) in Middleware.
//   }
// }


//
// export default function({ app, store, redirect, route }) {
//   console.log(store.state);
//   store.state.user != null && route.name == 'login' ? redirect('/admin') : ''
//   // store.state.user == null && isAdminRoute(route) ? redirect('/login') : ''
// }
//
// function isAdminRoute(route) {
//   if (route.matched.some(record => record.path == '/admin')) {
//     return true
//   }
// }


export default ({store, route, redirect}) => {

  console.log(store.state);
  const user = store.state.users.user;

  const blockedRoute = /\/admin\/*/g;
  const loginRoute = /\/login\/*/g;

  if(!user && route.path.match(blockedRoute)) {
    redirect('/');
  }

  if(user && route.path.match(loginRoute)) {
    redirect('/admin');
  }

}
