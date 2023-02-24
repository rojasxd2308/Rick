import Button from "react-bootstrap/Button";
import { InputGroup, Form } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./search.css"
import "./search.js";
function SearchBar(props) {
  function random(params) {
    let aleatorio = Math.round(Math.random() * (826 - 1) + 1);
    props.onSearch(aleatorio);
  }
  return (

      <Navbar  variant="dark" >
        <Container>
        <Link to='/home' className ="navbar-brand">        
       <div className="icono"></div>
            </Link>
        
        <Link to='/home' className ="navbar-brand">        
              Home
            </Link>
          <Nav className="me-auto ">
            <Link to='/cards' className ="nav-link">        
              Personajes
            </Link>
            <Nav.Link href="#features">Favoritos</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>

        <Form className="d-flex mx-3">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    id="entrada"
                    />
                          <Button
          variant="primary"
          onClick={() => {
            let dato = document.getElementById("entrada").value;
            props.onSearch(dato);
          }}
          >
          Agregar
        </Button>
          </Form>
        <Button className="random" onClick={random}>
          Random
        </Button>
          </Container>
      </Navbar>



  );
}

export default SearchBar;
