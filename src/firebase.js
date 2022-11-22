// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDgKHr2H1CVeqbGAtpTAEt5s8ndIETY0ZQ",
    authDomain: "twitterclone-f8385.firebaseapp.com",
    projectId: "twitterclone-f8385",
    storageBucket: "twitterclone-f8385.appspot.com",
    messagingSenderId: "772593509214",
    appId: "1:772593509214:web:b192a2e287d596db9b25cf",
    measurementId: "G-RJFN7C55BL"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;
