// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, setDoc, getDocs, doc, getDoc, collection } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { apiKey: "AIzaSyCQAO6K0or-vd--NT5ChOC4f8_pRkbKv-g", authDomain: "my-project-696ff.firebaseapp.com", projectId: "my-project-696ff", storageBucket: "my-project-696ff.appspot.com", messagingSenderId: "237621942340", appId: "1:237621942340:web:f269ec99f7fb060bef4411", measurementId: "G-27E0265EWG" };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); 


export {
    app, auth, db, getDocs, getDoc, collection, getFirestore, setDoc, doc, onAuthStateChanged
}
