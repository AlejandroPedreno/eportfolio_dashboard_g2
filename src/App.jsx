// Estilos
import './App.css'

// Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'

//Contexto
import TokenContext from './context/TokenContext';
import UserContext from './context/UserContext';

//Hooks
import { useState } from "react";

import { Routes, Route, Outlet } from 'react-router-dom';

import FuncionalidadEstudiante from './paginas/FuncionalidadEstudiante/FuncionalidadEstudiante';


function App() {

  let menu = "DAW";

  const token = "12345";

  let valorInicialUser = "Victor";
  const [user, setUser] = useState(valorInicialUser);

  function Layout({ user, menu, token }) {
  return (
    <TokenContext.Provider value={token}>
      <Cabecera usuario={user} />
      <UserContext.Provider value={user}>
        <div className="layout">
          <Roles menu={menu} />
          <Outlet /> {/* Aquí se renderiza la ruta activa */}
        </div>
      </UserContext.Provider>
    </TokenContext.Provider>
  );
}

  return (
    <Routes>
      <Route path="/" element={<Layout user={user} menu={menu} token={token} />}>
        <Route index element={<Dashboard />} /> {/* Ruta "/" */}
        <Route path="funcionalidadestudiante/:id" element={<FuncionalidadEstudiante />} /> {/* Ruta dinámica */}
      </Route>
    </Routes>
  );

}

export default App;
