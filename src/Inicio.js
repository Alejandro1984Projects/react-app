import './Inicio.css';
import{Link} from 'react-router-dom'

function Inicio() {
  return (
    <body >
        <header id="header-inicio">
            <div>                     
                
                <Link to='/'>
                    <img src="https://cdn.pixabay.com/photo/2012/04/15/22/07/log-35496_1280.png" alt=""></img>

                </Link>
                    
            </div>     
            <div id="titulo-inicio"><h1>Software de Inventario</h1></div>
        
        </header>
        <div id="section-inicio">

            <div id="cont-inicio">
                <div>
                    <Link to='/Consultas'>
                    <button>
                        <img src="https://cdn.pixabay.com/photo/2012/04/15/21/34/arrow-35387_1280.png" alt="" width="50"></img>
                        Consultas</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Activos'>
                    <button>
                        <img src="https://cdn.pixabay.com/photo/2012/04/15/21/34/arrow-35386_1280.png" alt="" width="50"></img>
                        Activos</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Ingresos'>
                    <button>
                        <img src="https://cdn.pixabay.com/photo/2021/02/19/14/44/delete-button-6030454_1280.png" alt="" width="50"></img>
                        Ingresos</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Salidas'>
                    <button>
                        <img src="https://cdn.pixabay.com/photo/2016/03/31/19/14/magnifying-glass-1294834_1280.png" alt="" width="50"></img>
                        Salidas</button>
                    </Link>                    
                </div>                
                <div>                    
                    <Link to='/Bajas'>
                    <button>
                        <img src="https://cdn.pixabay.com/photo/2021/07/25/08/07/advisors-6491207_1280.png" alt="" width="50"></img>
                        Bajas</button>
                    </Link>                    
                </div>               
                <div>                    
                    <Link to='/Usuarios'>
                    <button>
                        <img src="https://cdn.pixabay.com/photo/2021/07/25/08/05/add-6491195_1280.png" alt="" width="50"></img>
                        Usuarios</button>
                    </Link>                    
                </div>
            </div>                   
        
        </div>    
        <footer>
            <h3>Development Time</h3>
        </footer>
    </body>
  );
}

export default Inicio;