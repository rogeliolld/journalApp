import Swal from 'sweetalert2';

import { db } from "../firebase/firebase-config";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";


// react-journal
// https://api.cloudinary.com/v1_1/dlewsifaq/upload

export const startNewNote = () => {

    return  async ( dispatch, getState ) =>{

        const { uid } = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await addDoc(collection(db, `${ uid }`, "journal/notes"),newNote);

        dispatch( activeNote (doc.id, newNote) );

    }

};

export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const startLoadingNotes = ( uid ) =>{
    return async (dispatch) =>{
        const notes = await loadNotes(uid);
        dispatch( setNotes(notes) )
    }
}

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});


export const startSaveNote = (note) => {
    return async(dispatch, getState)=>{
        
        const { uid } = getState().auth
 
        if ( !note.url ) {
            delete note.url
        }
 
        const noteToFirestore = { ...note };
        delete noteToFirestore.id
 
        const noteRef = doc(db, `${uid}/journal/notes/${note.id}`)
        await updateDoc(noteRef,noteToFirestore);

        dispatch( refresNote( note.id, noteToFirestore ) );

        Swal.fire('Saved', note.title, 'success');

    }
}


export const refresNote = (id, note) =>({

    type: types.notesUpdate,
    payload:{
        id,
        note:{
            id,
            ...note
        }
    }

})