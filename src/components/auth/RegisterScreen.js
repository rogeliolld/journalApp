import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";

export default function RegisterScreen() {

  const initialForm = {
    name: 'Rogelio',
    email: 'rogelio@correo.com',
    password: '12345',
    password2: '12345',
};
  const [ formValues, handleInputChange] = useForm( initialForm );
  const {name, email, password, password2 } = formValues;

  const handleRegistrer = (e) => {
      e.preventDefault();
  }

  const isFormValid = () =>{
      //TODO:
  }

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={ handleRegistrer }>
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
