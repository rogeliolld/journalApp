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


  const firebaseConfigTesting = {
    apiKey: "AIzaSyBGKNuqcA5oIEX-YNRI_CQ9-GlcNw6gJHU",
    authDomain: "redux-demo-e9de5.firebaseapp.com",
    projectId: "redux-demo-e9de5",
    storageBucket: "redux-demo-e9de5.appspot.com",
    messagingSenderId: "283291233954",
    appId: "1:283291233954:web:402ad8dbb37086980ef1fb"
  };
  
let app = "";
  if(process.env.NODE_ENV === 'test'){
    //testing
    app = initializeApp(firebaseConfigTesting);

  }else{
    //dev/prod
    app = initializeApp(firebaseConfig);
  }
  
// Initialize Firebase

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
}