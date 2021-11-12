import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useForm } from "../../hooks/useForm";

import validator from 'validator';
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const { msgError } = useSelector(state => state.ui);



  const initialForm = {
    name: 'Rogelio',
    email: 'rogelio@correo.com',
    password: '123456',
    password2: '123456',
};
  const [ formValues, handleInputChange] = useForm( initialForm );
  const {name, email, password, password2 } = formValues;

  const handleRegistrer = (e) => {
      e.preventDefault();

      if (isFormValid()){
        dispatch(startRegisterWithEmailPasswordName(email, password, name));
      }
  }

  const isFormValid = () =>{
      if(name.trim().length===0){
        dispatch( setError('Name is required'));
        return false;
      }else if( !validator.isEmail(email) ){
        dispatch( setError('Email is Not valid'));
        return false;
      }else if (password !== password2 || password.length <= 6){
        dispatch( setError('Password should be at last 6 characters and match each other'));
        return false;
      }
      dispatch(removeError());
      return true;
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegistrer }>
        {
          msgError &&
          (
            <div className="auth__alert-error">
                { msgError }
            </div>
          )
        }

         <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={ handleInputChange }
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={ handleInputChange }
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={ handleInputChange }
        />
        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

       

        <Link 
            to="/auth/login" 
            className="link">
          Already registered?
        </Link>
      </form>
    </>
  );
}
