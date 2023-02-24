import Button from "react-bootstrap/Button";
import './home.css'

function Home(params) {


    return(
            <div className=" datos-usuario row no-gutters">
                <div className="col-5">

                <label>Hola viajero : </label>
                <label htmlFor="">nivel:</label>
                <label htmlFor="">planeta:</label>
                <label htmlFor=""> dimension:</label>
                <label htmlFor=""> guardar cambios</label>
                </div>
                <div className="col-2">
                    <label htmlFor="">

                    Que te gustaria hacer
                    </label>
                </div>
                <div className="col-5">
                    <Button>Rompecabezas</Button>
                    <Button>Test de hackeo</Button>
                    <Button>Comprar puntos</Button>

                </div>
            </div>
    )
            
}

export default Home;