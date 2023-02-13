import { Link } from "react-router-dom";
import { connect, Connect } from "react-redux";
import { accion1, accion2 } from "../redux/actions";

function Card(props) {
  const {addFavorite} = props
  const {delFavorite} = props
  const {myFavorites} = props
  function comprobar(id) {
    const tempArr = myFavorites
    if (!(tempArr.includes(id))) {
      addFavorite(id)
    }else{
      delFavorite(id)
    }
    //console.log(tempArr)  
    
  }

  return (
    <div className="tarjeta" key={props.id}>
      <button className="cerrar" onClick={() => {props.onClose(props.id)}}> X</button>
      <button className={myFavorites.includes(props.id) && "rojo"} onClick={() => {comprobar(props.id)}}> Y</button>

   <Link to={`/detail/${props.id}`} >
      <div className="descripcion">
         <h2>{props.name}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
      </div>
      <img src={props.image} alt="" />
   </Link>
    </div>
  );
}
const mapStateToProps = (state) =>{
  return {  myFavorites: state.myFavorites }
};
const mapDispatchToProps = (dispatch) =>{
  return{
    addFavorite : (param) => { dispatch(accion1(param))},
    delFavorite : (param) => { dispatch(accion2(param))}
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Card)
