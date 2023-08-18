import { Link } from 'react-router-dom';
import './Ingresar.css';

function Ingresar() {
  return (
    <div>
      <div id="cont-principal-ingresar">
        <div id="cont-central-ingresar">
              <div id="titulo-ingresar">
                  <h1 >Bienvenido</h1>
              </div> 
              <input type="text"></input>
              <br></br>
              <label >Usuario</label>
              <br></br>
              <br></br>
              <input type="text"></input>
              <br></br>
              <label >Contraseña</label>
              <br></br>
              <br></br>
              <Link to='/Inicio'>
                <button>Ingresar</button>
              </Link>              
              <br></br>
              <br></br>
        </div>
      </div>
        
    </div>
  );
}

export default Ingresar;
