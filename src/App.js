import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Cards from "./components/Cards.jsx";
//import characters, { Rick } from './data.js'
import Nav from "./components/Nav";
import React, { useState } from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./components/About";
import Detail from "./components/Detail";
import Form from "./components/Form.jsx";
import { useLocation } from "react-router-dom";
import {
  add,
  sesion,
  newCharacter,
  borrarCharacter,
  getAll,
} from "./firebase/opciones";
import { connect } from "react-redux";
import { falsoToken } from "./redux/actions";
function App({ falsoToken, idUser }) {
  const navigate = useNavigate();
  // seccion para estados
  const location = useLocation();
  const [user, setUser] = React.useState({
    username: {},
    password: {},
    estado: {},
  });
  const [characters, setCharacters] = React.useState([]);
  // estados para login

  const [access, setAccess] = useState(false);
  //const username = "admin";
  // const password = "admin";
  //redireccionamiento si no se logea
  useEffect(() => {
    !access && navigate("/");
    // obtengo datos y seteo mi lista segun mi db online
    getAll(idUser).then((res) => {
      const exists = characters.some((char) => {
        let t1 ;
          res.forEach( (temp) => {
            if (temp.id == char.id) {
                t1= true
            }
        })
        return t1
      });
      //console.log(exists);
      if (!exists) {
        res.forEach((character) => {
          //console.log(character.id);
          fetch(`https://rickandmortyapi.com/api/character/${character.id}`)
            .then((response) => response.json())
            .then((data) => {
              if (data.name) {
                setCharacters((oldChars) => [...oldChars, {...data,rarity: character.rarity}]);
              } else {
                window.alert(
                  "extraño, tienes un id que no coincide con ningun personaje"
                );
              }
            });
        });
      }
    });
  }, [access]);

  //seccion para funciones
  function login(userData) {
    sesion(userData)
      .then((result) => {
        console.log(result);
        if (result.estado == true) {
          setAccess(true);
          falsoToken(result.id);
          navigate("/home");
        } else {
          alert("credenciales incorrectas");
        }
      })
      .catch((error) => {
        console.log(error);
      });

    /*if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("mal ctm");
    }*/
  }
  function alBuscar(character) {
    for (let i = 0; i < characters.length; i++) {
      if (characters[i].id == character) {
        window.alert("Obtuviste un personaje repetido");
        return false;
      }
    }
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          let rarity = Math.floor(Math.random() * 4) + 1;
          newCharacter({ id: character, user: idUser , rarity: rarity});
          setCharacters((oldChars) => [...oldChars, {...data,rarity:rarity}]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    console.log(id);
    const nuevoChars = characters.filter((item) => {
      return item.id !== id;
    });
    borrarCharacter(id);
    setCharacters(nuevoChars);
  }
  //logeo

  return (
    <div className="App" >
      {location.pathname !== "/" && <Nav alBuscar={alBuscar} />}
      <Routes>
        <Route path="/" element={<Form user={user} login={login} />} />
        <Route
          path="/home"
          element={
            <div className="container-card">
              <Cards characters={characters} onClose={onClose} />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={<Detail characters={characters} />}
        />
      </Routes>

      <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
      <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    idUser: state.actualUser,
  };
}
function mapDispatchToProps(dispatch) {
  //quiero simular un token limitado al id de mi db
  return {
    falsoToken: (id) => {
      dispatch(falsoToken(id));
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
