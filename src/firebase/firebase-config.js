import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyAtLVD5FJUTqjQedRcrOjvgpGa0HcECQks",
    authDomain: "react-app-cursos-f4677.firebaseapp.com",
    projectId: "react-app-cursos-f4677",
    storageBucket: "react-app-cursos-f4677.appspot.com",
    messagingSenderId: "708382602530",
    appId: "1:708382602530:web:4e3467df52e42ab3a3a17b"
  
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
}