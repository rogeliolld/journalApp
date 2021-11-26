import 'firebase/firestore';
import 'firebase/auth';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {

    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
  
  };


//   const firebaseConfigTesting = {
//     apiKey: "AIzaSyBGKNuqcA5oIEX-YNRI_CQ9-GlcNw6gJHU",
//     authDomain: "redux-demo-e9de5.firebaseapp.com",
//     projectId: "redux-demo-e9de5",
//     storageBucket: "redux-demo-e9de5.appspot.com",
//     messagingSenderId: "283291233954",
//     appId: "1:283291233954:web:402ad8dbb37086980ef1fb"
//   };
  
// let app = "";
//   if(process.env.NODE_ENV === 'test'){
//     //testing
//     app = initializeApp(firebaseConfigTesting);

//   }else{
//     //dev/prod
   const  app = initializeApp(firebaseConfig);
  // }
  
// Initialize Firebase

const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
}