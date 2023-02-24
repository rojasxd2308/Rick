import { useParams } from "react-router-dom";
import "./detailStyle.css";
import { Link } from "react-router-dom";
import "./detailAnimation.js";
import { faDna } from "@fortawesome/free-solid-svg-icons";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import { faMercury } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

export default function Detail(props) {
  const { id } = useParams();
  const { characters } = props;
  const filtrado = (id) => {
    const seleccion = characters.filter((item) => {
      return item.id == id;
    });
    console.log(seleccion);
    return seleccion;
  };
  const claseRara = (id) => {
    switch (id) {
        case 1:
            return 'Ur'
        break;
        
        case 2:
            return 'Sr'
        break;
        
        case 3:
            return 'R'
        break;
        
        case 4:
            return 'C'
        break;
        
        default:
            return '0'
            break;
    }
  }
  let character = filtrado(id);
  const renderizar = () => {
    if (character.length == 0) {
      return <h2>este personaje no lo tienes xd</h2>;
    } else {
      return (
        <div className={"card animated planeta card-"+claseRara(character[0].rarity)}>
          <div className="nameCard d-flex justify-content-between container">
            <div>{character[0].name}</div>
            <div>{claseRara(character[0].rarity)}</div>
          </div>
          <div class="d-flex align-items-center">
            <img src={character[0].image} className="card-image" />
          </div>
          <div className="descrCard ">
            <div className="row">
              <div className="col-12 text-start">
                <FontAwesomeIcon icon={faDna} className="mx-1"/> 
                <FontAwesomeIcon icon={faDna} className="mx-1"/> 
                <FontAwesomeIcon icon={faDna} className="mx-1"/> 
                <span>
                    Especie:
                    </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start mx-1">
                <span>
                {character[0].species}
                </span>
                </div>
            </div>
            <div className="row">
              <div className="col-12 text-start">
                <FontAwesomeIcon icon={faHeartPulse} className="mx-1"/> 
                <FontAwesomeIcon icon={faHeartPulse} className="mx-1"/> 
                <FontAwesomeIcon icon={faHeartPulse} className="mx-1"/> 
                <span>
                    Estado:
                    </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start mx-1">
                <span>
                {character[0].status}
                </span>
                </div>
            </div>
            <div className="row">
              <div className="col-12 text-start">
                <FontAwesomeIcon icon={faMercury} className="mx-1"/> 
                <FontAwesomeIcon icon={faMercury} className="mx-1"/> 
                <FontAwesomeIcon icon={faMercury} className="mx-1"/> 
                <span>
                    Género:
                    </span>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start mx-1">
                <span>
                {character[0].gender}
                </span>
                </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="details-container ">
      {renderizar()}
     
      <Link to="/home">
        {" "}
        <Button variant="outline-success">Back to home</Button>
      </Link>
    </div>
  );
}
