import firebase from 'firebase'

const config = {
  // databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

export default firebase