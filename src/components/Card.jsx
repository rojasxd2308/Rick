import { Link } from "react-router-dom";
import { connect, Connect } from "react-redux";
import { accion1, accion2 } from "../redux/actions";
import { CloseButton } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as heartSolid } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const navigate = useNavigate();
  const { addFavorite } = props;
  const { delFavorite } = props;
  const { myFavorites } = props;
  function comprobar(id) {
    const tempArr = myFavorites;
    if (!tempArr.includes(id)) {
      addFavorite(id);
    } else {
      delFavorite(id);
    }
    //console.log(tempArr)
  }
  function detalles(params) {
    navigate(`/detail/${props.id}`);
    console.log("detallado");
  }
  const customCheckboxClass = `custom-checkbox custom-checkbox-${props.id}`;

  const fullGlyphiconStyle = {
    opacity: myFavorites.includes(props.id) ? 1 : 0,
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
  return (
    
    <div class="tarjeta animacion" key={props.id} >
      <div className="botones">
      <CloseButton
        className="boton-cerrar"
        onClick={() => {
          props.onClose(props.id);
        }}
      />
      <label
        className="id-of-input"
        class={customCheckboxClass}
        onClick={() => {
          comprobar(props.id);
        }}
        >
        <input type="checkbox" id={props.id} />
        <FontAwesomeIcon class="glyphicon empty" icon={faHeart} />
        <FontAwesomeIcon
          class="glyphicon full"
          icon={heartSolid}
          style={fullGlyphiconStyle}
          />
      </label>

      </div>
    <div className={"tarjeta golden-frame flex-shrink-0 card "+claseRara(props.rarity)} key={props.id} onClick={detalles}>
      <Link to={`/detail/${props.id}`}>
        <div className="descripcion">
          <div class="nombre">{props.name}</div>
        </div>
        <img src={props.image} alt="" />
      </Link>
        </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addFavorite: (param) => {
      dispatch(accion1(param));
    },
    delFavorite: (param) => {
      dispatch(accion2(param));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
