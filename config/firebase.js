import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCWAf1hYq0Lli_4rIdnmLmFF3lqrB14EGA",
    authDomain: "instagram-5b43a.firebaseapp.com",
    databaseURL: "https://instagram-5b43a-default-rtdb.firebaseio.com",
    projectId: "instagram-5b43a",
    storageBucket: "instagram-5b43a.appspot.com",
    messagingSenderId: "177644275513",
    appId: "1:177644275513:web:3e73e1e474a1c6c7c7cae8",
    measurementId: "G-3P8Y7JZWPX"
}

let Firebase = firebase.initializeApp(firebaseConfig)
export default Firebase;