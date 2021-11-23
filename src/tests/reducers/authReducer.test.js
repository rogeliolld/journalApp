import { authReducer } from '../../reducers/authReducer';
import { types } from '../../types/types';
describe('Pruebas en authReducer', () => {

    test('debe de realizar el login', () => {
        
        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: 'abc',
                displayName: 'Rogelio'
            }
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual({
            uid: 'abc',
            name: 'Rogelio'
        }) 
    });


    test('debe de realizar el logout', () => {
        
        const initState = {
            uid: 'XXX123',
            name: 'Rogelio'

        };
        const action = {
            type: types.logout,
            payload: {}
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual({}) 
    });

    test('No debe hacer cambios en el State', () => {
        
        const initState = {
            uid: 'XXX123',
            name: 'Rogelio'

        };
        const action = {
            type: '123XXX'
        };
        const state = authReducer( initState, action );

        expect( state ).toEqual(initState) 
    });
    
})
