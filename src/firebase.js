import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBpl14SPkhWqinN5UOxdwP9or3DweSgl_k",
  authDomain: "react-fb-todo-app.firebaseapp.com",
  databaseURL: "https://react-fb-todo-app.firebaseio.com",
  projectId: "react-fb-todo-app",
  storageBucket: "react-fb-todo-app.appspot.com",
  messagingSenderId: "524470143882",
  appId: "1:524470143882:web:9d06236750a66f92235673",
  measurementId: "G-Y6SWGBHNQM"
})

const db = firebaseApp.firestore()

export default db
