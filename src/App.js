import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Ingresar from './Ingresar';
import Inicio from './Inicio';
import Consultas from './Consultas';
import Activos from './Activos';
import Ingresos from './Ingresos';
import Salidas from './Salidas';
import Bajas from './Bajas';
import Usuarios from './Usuarios';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Ingresar/>} />

        <Route path='/Inicio' element={<Inicio/>} />

        <Route path='/Consultas' element={<Consultas/>} />

        <Route path='/Activos' element={<Activos/>} />

        <Route path='/Ingresos' element={<Ingresos/>} />

        <Route path='/Salidas' element={<Salidas/>} />

        <Route path='/Bajas' element={<Bajas/>} />

        <Route path='/Usuarios' element={<Usuarios/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
