 /**
 * @jest-environment node
 */
  import React from 'react'
  import { Provider } from 'react-redux';
  import { mount } from 'enzyme'
  import { MemoryRouter } from 'react-router-dom';
  
  import configureStore from 'redux-mock-store';
  import thunk from 'redux-thunk';
  import '@testing-library/jest-dom';
  
  import RegisterScreen from '../../../components/auth/RegisterScreen';
  
  import { types } from '../../../types/types';
  import Swal from 'sweetalert2';
  
  import 'jsdom-global/register';
  
//   jest.mock('../../../actions/auth', () =>({
//       startGoogleLogin: jest.fn(),
//       startLoginEmailPassword: jest.fn()
//   }))

jest.mock('sweetalert2', () =>({
    fire: jest.fn()
}))
  
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  
  const initState = {
      auth:{},
      ui: {
          loading: false,
          msgError: null
      }
  };
  
  let store = mockStore(initState);
//   store.dispatch = jest.fn();
  
  const wrapper = mount (
          <Provider store={ store }>
              <MemoryRouter>
                  <RegisterScreen/> 
              </MemoryRouter>
          </Provider> 
  );
  

describe('Pruebas en <RegisterScrren', () => {
    
    test('debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de hacer el dispatch de la acción respectiva', () => {

        const emailField = wrapper.find('input[name="email"]');

        emailField.simulate('change',{
            target:{
                value: '',
                name: 'email'
            }
        });

        wrapper.find('form').simulate('submit',{
            preventDefault(){}
        });

        const actions = store.getActions();

        expect( actions[0] ).toEqual({
            type: types.uiSetError,
            payload: 'Email is Not valid'
        });

    });
    
})
