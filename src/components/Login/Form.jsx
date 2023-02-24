import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Button } from "react-bootstrap";
import "./form-effect";

import "./formStyle.css";
export function validate(temp) {
  let errors = {};
  errors.estado = false;
  if (!temp.username) {
    errors.username = "Se requiere un nombre";
    errors.estado = true;
  }
  if (!temp.password) {
    errors.password = "Se requiere una contraseña";
    errors.estado = true;
  }
  return errors;
}

export default function Form(props) {
  const { login } = props;
  const [temp, setTemp] = React.useState({
    username: "",
    password: "",
    estado: "",
  });
  const [errors, setErrors] = React.useState({
    username: "",
    password: "",
    estado: "",
  });
  function actualizando(e) {
    setTemp({
      ...temp,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...temp,
        [e.target.value]: e.target.value,
      })
    );
  }
  function handlelogin() {
    let resultado = validate(temp);
    setErrors(resultado);
    if (!resultado.estado) {
      const usuario = temp;
      console.log("logeado");
      login(usuario);
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="form-login d-flex align-items-center justify-content-center"
    >
      <div className="form-content .col-12">
        <div>
          <img className="logo" src="" alt="" />
        </div>
        <div className="welcome">
        <label htmlFor="" className="relativo">
          Bienvenido
        </label>
        </div>
        
        <div class="group ">
          <input type="text" name="username" onChange={actualizando}></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Nombre de usuario</label>
          <span htmlFor="" className="warning row">
            {errors.username}
          </span>
        </div>
        <div class="group ">
          <input
            type="password"
            onChange={actualizando}
            name="password"
            id=""
          ></input>
          <span class="highlight"></span>
          <span class="bar"></span>
          <label>Contraseña</label>
          <span htmlFor="" className="warning row">
            {errors.password}
          </span>
        </div>

        <div className="group row mt-3 form-group">
          <Button type="submit" className="login" onClick={handlelogin}>
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
type = "submit";
