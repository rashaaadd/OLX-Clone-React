import firebase from "firebase";
import 'firebase/auth'
// import 'firebase/firebase'
const firebaseConfig = {
    apiKey: "AIzaSyA7gt631bVnvjObg3nd5tzaWP7IjSlABO8",
    authDomain: "olx-clone-a0078.firebaseapp.com",
    projectId: "olx-clone-a0078",
    storageBucket: "olx-clone-a0078.appspot.com",
    messagingSenderId: "603846758895",
    appId: "1:603846758895:web:c355d9cf943780e9e8e61a",
    measurementId: "G-KQ6YNNXPV3"
};

export default firebase.initializeApp(firebaseConfig)