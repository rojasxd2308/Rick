import Card from './Card';
import './codigo.css'
import "./cardStyle.css" ;

export default function Cards(props) {
   const { characters } = props; 
   return (
      <div className='container-card d-flex flex-wrap justify-content-center'>
         {
            characters.map((personaje) => {
               return <Card 
                  id = {personaje.id}
                  name={personaje.name}
                  species={personaje.species}
                  gender={personaje.gender}
                  image={personaje.image}
                  onClose={props.onClose}
                  rarity = {personaje.rarity}
                  />
            })
         }
      </div>
   );
}
