import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCQzY51_AF7uw8ExZYxpKnYwqqiRi7v6wA",
    authDomain: "whatsapp-clone-291a3.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-291a3.firebaseio.com",
    projectId: "whatsapp-clone-291a3",
    storageBucket: "whatsapp-clone-291a3.appspot.com",
    messagingSenderId: "28172308518",
    appId: "1:28172308518:web:bdbabb602865dcb8fd96e7",
    measurementId: "G-4PT03QQ1TF"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
