
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyD6WEsUXyWL4b-pkg6Qt-YE6K153GAjzCQ","authDomain":"my-project-1527060076661.firebaseapp.com","databaseURL":"https:\u002F\u002Fmy-project-1527060076661.firebaseio.com","projectId":"my-project-1527060076661","storageBucket":"my-project-1527060076661.appspot.com","messagingSenderId":"183852513522","appId":"1:183852513522:web:0f8ead00ee8a4b8fc6b86b"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"\u003CrandomName\u003E","url":"\u003CrandomUrl\u003E"}]
  const action = actions.find(x => x.id === e.action.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
