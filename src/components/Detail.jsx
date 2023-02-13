import { useParams } from "react-router-dom";
import './detailStyle.css'
import { Link } from "react-router-dom";

export default function Detail(props) {
    const {id} = useParams();
    const {characters} = props;
    const filtrado = (id) =>{
        const seleccion = characters.filter(
                (item) => {
                    return item.id == id
                }
            )
            console.log(seleccion)
            return seleccion
    }
    let character = filtrado(id)
    const renderizar = () =>{
        if(character.length == 0){
          return( <h2>este personaje no lo tienes xd</h2>
             )      
        }else{
         return(
            <div >
            <h3>Nombre: { character[0].name }</h3>
            <h3>Estado: { character[0].status}</h3>
            <img src={character[0].image} alt="" />
            <h4>Género: {character[0].gender}</h4>
            </div>)
        }
            }
    return(
             <div className="details-container">
                 {renderizar()}
                <Link to="/home"> <button>Volver a casa</button></Link>
             </div>       
    )
    
}