import Button from "react-bootstrap/Button";
import { InputGroup, Form } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";
import {Container} from "react-bootstrap";
import "./search.css"
import "./search.js";
function SearchBar(props) {
  function random(params) {
    let aleatorio = Math.round(Math.random() * (826 - 1) + 1);
    props.onSearch(aleatorio);
  }
  return (

      <Navbar bg="dark" variant="dark" >
        <Container>
          <Navbar.Brand className="mg-auto" href="#home">Help</Navbar.Brand>
          <Nav className="me-auto ">
            <Nav.Link href="#home">Home</Nav.Link>
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
