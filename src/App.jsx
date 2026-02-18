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
import FuncionalidadDocente from './paginas/FuncionalidadDocente/FuncionalidadDocente';
import PaginaFamiliasProfesionales from './paginas/PaginaFamiliasProfesionales/PaginaFamiliasProfesionales';


function App() {

  let menu = "DAW";

  const token = "12345";

  let valorInicialUser = "Víctor";
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
        <Route path="funcionalidaddocente/:id" element={<FuncionalidadDocente />} /> {/* Ruta dinámica */}
        <Route path="familiasprofesionales" element={<PaginaFamiliasProfesionales />} /> {/* Ruta para familias profesionales */}
        <Route path=":nombre" element={<Dashboard />} /> {/* Ruta dinámica para cualquier otro nombre */}
      </Route>
    </Routes>
  );

}

export default App;
