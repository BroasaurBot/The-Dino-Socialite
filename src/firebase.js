import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'
import { getAuth, signInAnonymously } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA4zbuN-BFGf-1YY6JvpgBhE_Uepea3xqc",
    authDomain: "react-firebase-game-10718.firebaseapp.com",
    databaseURL: "https://react-firebase-game-10718-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "react-firebase-game-10718",
    storageBucket: "react-firebase-game-10718.appspot.com",
    messagingSenderId: "1002156001948",
    appId: "1:1002156001948:web:29718db013f3751bbd3b59",
    measurementId: "G-N25NGRRSDC"
  };

  export const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app);

  signInAnonymously(auth).then(() => {
    console.log("Signed in to firebase!!!!")

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.Message;

    console.log(errorCode, errorMessage);
  })

  export const database = getDatabase(app);

  console.log("Firebase initialized")