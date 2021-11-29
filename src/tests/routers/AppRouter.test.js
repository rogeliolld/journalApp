 /**
 * @jest-environment node
 */
  import React from 'react'
  import { mount } from 'enzyme'
  import { Provider } from 'react-redux';
  import { MemoryRouter } from 'react-router-dom';
  
  import configureStore from 'redux-mock-store';
  import thunk from 'redux-thunk';

  import '@testing-library/jest-dom';
  
  import { act } from '@testing-library/react';
  import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


  import { login } from '../../actions/auth';
  import AppRouter from '../../routers/AppRouter';

  import Swal from 'sweetalert2';

  import 'jsdom-global/register';


  
  jest.mock('sweetalert2', () =>({
      fire: jest.fn()
  }));
  
  jest.mock('../../actions/auth', () =>({
      login: jest.fn()
  }));

  
  
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  
  const initState = {
      auth:{},
      ui: {
          loading: false,
          msgError: null
      },
      notes:{
          active:{
              id: 'ABC123'
          },
          notes:[]
      }
  };
  
  let store = mockStore(initState);
  store.dispatch = jest.fn();
   

describe('Pruebas en <AppRouter />', () => {

    test('debe de llamar el login si estoy autenticado', async() => {
        
        let user;

        await act(async () => {

            const auth = getAuth();
            const userCred = await signInWithEmailAndPassword(auth, 'test@testing.com', '123456' );  
            user = userCred.user;

            const wrapper = mount(

                <Provider store={ store }>
                    <MemoryRouter>
                        <AppRouter /> 
                    </MemoryRouter>
                </Provider>

            );
        
        });

        expect( login ).toHaveBeenCalledWith('nUukB2Dw8sa1DCwVvnvFDMenE1r1', null);

    });
    
});
