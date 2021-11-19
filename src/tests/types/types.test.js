import { types } from "../../types/types"

describe('Pruebas con nuestros Types', () => {
    
    test('Debe de tener estos Types', () => {
        expect( types ).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',

            uiSetError: '[UI] Set Error',
            uiRemoveError: '[UI] Remove Error',

            uiStartLoading: '[UI] Start Loading',
            uiFinishLoading: '[UI] Finish Loading',

            notesAddNew: '[Notes] New Note',
            notesActive: '[Notes] Set active note',
            notesLoad: '[Notes] Load notes',
            notesUpdate: '[Notes] Updated note',
            notesFileUrl: '[Notes] Updated imagen url',
            notesDelete: '[Notes] Delete note',
            notesLogoutCleaning: '[Notes] Logout Cleaning',
        })
    })
    
})
