import Card from './Card';
import "./cardStyle.css" ;

export default function Cards(props) {
   const { characters } = props; 
   return (
      <div className='container-card'>
         {
            characters.map((personaje) => {
               return <Card 
                  id = {personaje.id}
                  name={personaje.name}
                  species={personaje.species}
                  gender={personaje.gender}
                  image={personaje.image}
                  onClose={props.onClose}
                  />
            })
         }
      </div>
   );
}
