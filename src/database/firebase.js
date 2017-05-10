import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAOwQN4uWzQgthytTkb7BQ5PLExHhobqpw",
    authDomain: "studendgradetable.firebaseapp.com",
    databaseURL: "https://studendgradetable.firebaseio.com",
    projectId: "studendgradetable",
    storageBucket: "studendgradetable.appspot.com",
    messagingSenderId: "935204100534"
  };
  
  firebase.initializeApp(config);
  const database = firebase.database()

  export default database;