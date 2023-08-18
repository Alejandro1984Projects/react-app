import './Estilos.css';
import{Link} from 'react-router-dom'

function Ingresos() {
  return (
    <body>
        <header>
            <div>
                <Link to='/Inicio'>
                    <img src="https://cdn.pixabay.com/photo/2013/07/12/12/56/home-146585_1280.png" alt=""></img>

                </Link>                          
                
                <Link to='/'>
                    <img src="https://cdn.pixabay.com/photo/2012/04/15/22/07/log-35496_1280.png" alt=""></img>

                </Link>
                    
            </div>      
            <div id="titulo"><h1>Ingreso de Equipos</h1></div>
        
        </header>
        <section>

            <div>
                <div>
                    <Link to='/Consultas'>
                    <button>Consultas</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Activos'>
                    <button>Activos</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Ingresos'>
                    <button>Ingresos</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Salidas'>
                    <button>Salidas</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Bajas'>
                    <button>Bajas</button>
                    </Link>                    
                </div>               
                <div>                    
                    <Link to='/Usuarios'>
                    <button>Usuarios</button>
                    </Link>                    
                </div>            
                
            </div>
            
            <div id="cont-central">
                
                <div id="contenido">
                                    
                    <div >Documento<input type="text"></input></div>
                    
                    <div >Codigo Activo<input type="text"></input></div>

                    <div><button>Guardar</button></div>                                                
                    
                </div>                
                                    
            </div>
        </section>  
        <footer>
            <h3>Development Time</h3>
        </footer>  
    
    </body>
  );
}

export default Ingresos;
