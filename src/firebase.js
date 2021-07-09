import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAmgeyweX5zWeAZrcx4TluaVXE1uhrk56E",
    authDomain: "fir-react-email-8a3d8.firebaseapp.com",
    projectId: "fir-react-email-8a3d8",
    storageBucket: "fir-react-email-8a3d8.appspot.com",
    messagingSenderId: "486001900055",
    appId: "1:486001900055:web:45f4e170cd4d7610413a52"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}


const db = firebase.firestore()

const auth = firebase.auth()

export { auth }
export default db