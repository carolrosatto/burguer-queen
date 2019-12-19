import firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAN2K4c3MbWBVGBu_TKdJ6YaeytLyj5BgI",
    authDomain: "burger-queen-b8135.firebaseapp.com",
    databaseURL: "https://burger-queen-b8135.firebaseio.com",
    projectId: "burger-queen-b8135",
    storageBucket: "burger-queen-b8135.appspot.com",
    messagingSenderId: "827640518224",
    appId: "1:827640518224:web:3c3f793d2fe102dddbe355"
  };
  
  const firebaseCon = firebase.initializeApp(firebaseConfig);
 
  const db = firebase.firestore();

  export { db };

  export default firebaseCon;