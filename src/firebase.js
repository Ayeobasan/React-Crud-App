// import * as firebase from "firebase";

// var firebaseConfig = {
//   apiKey: "AIzaSyA54Upd2hxJSCMAYLwYH6G4Ta6v7rRUQGk",
//   authDomain: "database-29fed.firebaseapp.com",
//   databaseURL: "https://database-29fed-default-rtdb.firebaseio.com",
//   projectId: "database-29fed",
//   storageBucket: "database-29fed.appspot.com",
//   messagingSenderId: "1084704699316",
//   appId: "1:1084704699316:web:f70251d0a1a628a8e338e1"
//   };
//   // Initialize Firebase
//   var fireDb = firebase.initializeApp(firebaseConfig);

//   export default fireDb.database().ref();

import  firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyA54Upd2hxJSCMAYLwYH6G4Ta6v7rRUQGk",
    authDomain: "database-29fed.firebaseapp.com",
    databaseURL: "https://database-29fed-default-rtdb.firebaseio.com",
    projectId: "database-29fed",
    storageBucket: "database-29fed.appspot.com",
    messagingSenderId: "1084704699316",
    appId: "1:1084704699316:web:f70251d0a1a628a8e338e1"
  };
// firebase.initializeApp(firebaseConfig)
var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();