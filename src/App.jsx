// Estilos
import './App.css'

// Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'

//Contexto
import TokenContext from './context/TokenContext';

//Hooks
import { useState } from "react";


function App() {

  let menu = "DAW";

  const token = "12345";

  let valorInicialUser = "Alejandro";
  const [user, setUser] = useState(valorInicialUser);

  return (
    <TokenContext.Provider value={token}>
      <Cabecera usuario={user} />
      <div className="layout">
        <Roles menu={menu} />
        <Dashboard/>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
