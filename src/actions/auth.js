import { createUserWithEmailAndPassword, updateProfile,  getAuth, signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'; 
import { googleAuthProvider  } from '../firebase/firebase-config';
import { types } from "../types/types"
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) =>{
    return (dispatch) =>{
        dispatch( startLoading() );

        const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then( ({ user }) => {
                dispatch( login(user.uid, user.displayName) );
                dispatch( finishLoading() );
        }).catch(
            e =>{
                console.log(e);
                dispatch( finishLoading() );
            }
        );
    }
}

export const startGoogleLogin = () =>{
    return (dispatch) =>{
        const auth = getAuth();
        signInWithPopup(auth, googleAuthProvider)
            .then(({user}) =>{
                dispatch(login(user.uid, user.displayName))
            });
    }
}


export const startRegisterWithEmailPasswordName = (email, password, name) =>{
    return (dispatch) => {
 
        const auth = getAuth();
            createUserWithEmailAndPassword(auth, email, password)
                .then( async({ user }) => {
 
                await updateProfile( user, { displayName: name });

                dispatch(
                    login(user.uid, user.displayName)
                )
        }).catch(
            e => console.log(e)
        );
    }
}

export const login = (uid, displayName)=>({
   
        type: types.login,
        payload:{
            uid,
            displayName
        }
   
})