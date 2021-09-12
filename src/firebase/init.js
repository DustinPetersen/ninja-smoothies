import firebase from 'firebase/app'
import firestore from 'firebase/firestore'


var config = {
    apiKey: "AIzaSyBiRWPKhlKz0VV3zXFuIIEQy0IVFkPwFK4",
    authDomain: "ninja-smoothies-bb3d4.firebaseapp.com",
    projectId: "ninja-smoothies-bb3d4",
    storageBucket: "ninja-smoothies-bb3d4.appspot.com",
    messagingSenderId: "218178347604",
    appId: "1:218178347604:web:2f56907fbb4c7396ed83c1"
  };

const firebaseApp = firebase.initializeApp(config);


//export firebase database

export default firebaseApp.firestore()