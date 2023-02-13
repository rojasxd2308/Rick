import React from "react";
import './formStyle.css'

export function validate(temp) {
  let errors = {};
  errors.estado= false;
  if (!temp.username) {
    errors.username = "Se requiere un nombre";
    errors.estado = true
  }
  if (!temp.password) {
    errors.password = "Se requiere una contraseña";
    errors.estado = true
  }
  return errors;
}

export default function Form(props) {
  const {login} = props;
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
            ...temp,[e.target.value] : e.target.value
        })
    )
  }
  function handlelogin(){
      let resultado = validate(temp);
      setErrors(resultado)
      if(!resultado.estado){
        const usuario= temp
        console.log("logeado")
        login(usuario)
      }
  }
  return (
    <div className="form-login">
      <div className="entrada">
        <label htmlFor="">Usuario: </label>
        <input type="text" name="username" onChange={actualizando} />
        <label htmlFor="">{errors.username}</label>
      </div>
      <div className="entrada">
        <label htmlFor="">Contraseña: </label>
        <input type="password"  onChange={actualizando} name="password" id="" />
        <label htmlFor="">{errors.password}</label>
      </div>
      <button className="login" onClick={handlelogin}>
        Login
      </button>
    </div>
  );
}
