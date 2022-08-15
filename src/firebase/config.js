import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC3IkEDsO7omMmfIyghVD4RnH6qZDobcRY",
    authDomain: "vue3-firebase-projeler-46f07.firebaseapp.com",
    projectId: "vue3-firebase-projeler-46f07",
    storageBucket: "vue3-firebase-projeler-46f07.appspot.com",
    messagingSenderId: "569981359891",
    appId: "1:569981359891:web:bb4e349d377648f740ece6"
};


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp

export { db, timeStamp }