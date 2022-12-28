import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBMDKDCi857kZ8Q6ptnho-v6AEJrZgr4Yw",
    authDomain: "cskreact-9c6b4.firebaseapp.com",
    projectId: "cskreact-9c6b4",
    storageBucket: "cskreact-9c6b4.appspot.com",
    messagingSenderId: "399850911617",
    appId: "1:399850911617:web:36d77cd8fcdc60856fda80",
    measurementId: "G-X3KYZYPV1T"
  };
firebase.initializeApp(firebaseConfig);

export{
    firebase
}