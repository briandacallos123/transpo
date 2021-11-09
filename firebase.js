import firebase from "firebase";


 const firebaseConfig = {
    apiKey: "AIzaSyCZIqIrKX5vl1sDNmzBBG6BH911BgiH34w",
    authDomain: "yoeme-c2c1f.firebaseapp.com",
    projectId: "yoeme-c2c1f",
    storageBucket: "yoeme-c2c1f.appspot.com",
    messagingSenderId: "889692037862",
    appId: "1:889692037862:web:6536e8b304fc82db901127",
    measurementId: "G-2PJ0CV8LKL"
};
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}else{
    app = firebase.app()
}

const firestore = firebase.firestore()
const auth = firebase.auth();

export {firestore, auth}