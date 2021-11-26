/**
 * @jest-environment node
 */
 import * as fs from 'fs';
import { deleteDoc, doc, getDoc } from 'firebase/firestore';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startNewNote, startLoadingNotes, startSaveNote, startUploading } from '../../actions/notes';
import { db } from '../../firebase/firebase-config';
import { types } from '../../types/types';
import { fileUpload } from '../../helpers/fileUpload';
 
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'Ld1upu7HxomGSrF6ePB3',
            title: 'Hola',
            body: 'Mundo'
        }
    }
}

let store = mockStore(initState);

global.scrollTo = jest.fn(); 

jest.mock('../../helpers/fileUpload', () => ({
    fileUpload: jest.fn()
}))

describe('Pruebas con las acciones de notes', () => {

    beforeEach(()=>{
        store = mockStore(initState);
    })
    
    test('debe crear una nueva nota startNewNote', async() => {
        
       await store.dispatch( startNewNote() );

       const actions = store.getActions();

       expect( actions[0] ).toEqual({
           type: types.notesActive,
           payload: {
               id: expect.any(String),
               title: '',
               body: '',
               date: expect.any(Number)
           }
        });


       expect( actions[1] ).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;
        const noteRef = doc(db, `/TESTING/journal/notes/${docId}`);
        await deleteDoc(noteRef);


    });

    test('startLoadingNotes debe cargar las notas', async() => {
        
        await store.dispatch( startLoadingNotes('TESTING') );
        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),
        }

        expect(actions[0].payload[0]).toMatchObject(expected);

    });

    test('startSaveNote debe de actualizar la nota', async() => {
        
        const note = {
            id: 'Ld1upu7HxomGSrF6ePB3',
            title: 'titulo',
            body: 'body',
        };

        await store.dispatch( startSaveNote( note ) );
        const actions = store.getActions();

        expect ( actions[0].type ).toBe( types.notesUpdate );

        const getDocumentRef = await getDoc(doc( db, `/TESTING/journal/notes/${note.id}` ));  
        expect(getDocumentRef.data().title).toBe(note.title);

    });



    test('startUploading debe de actualizar la url del entry', async () => {
        fileUpload.mockReturnValue('https://hola-mundo.com/cosa.jpg');
        fs.writeFileSync('foto.jpg', '');
        const file = fs.readFileSync('foto.jpg');
        await store.dispatch(startUploading(file));

        const getDocumentRef = await getDoc(doc( db, `/TESTING/journal/notes/Ld1upu7HxomGSrF6ePB3` ));  
        expect(getDocumentRef.data().url).toBe('https://hola-mundo.com/cosa.jpg');

    });

    
});
