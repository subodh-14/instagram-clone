import firebase from "firebase";
import "firebase/firestore"

const app =firebase.initializeApp({
    
    apiKey: "AIzaSyCM5Fz2UVg9spNpBJTNPHtRMeYRmemP-_w",
    authDomain: "instagram-clone-react-7b7f0.firebaseapp.com",
    projectId: "instagram-clone-react-7b7f0",
    storageBucket: "instagram-clone-react-7b7f0.appspot.com",
    messagingSenderId: "244577858262",
    appId: "1:244577858262:web:98dd1ef4fcf79ebfd18f77",
    measurementId: "G-BCB7T85T8Z"
      
});


const db= app.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export {db, auth ,storage};