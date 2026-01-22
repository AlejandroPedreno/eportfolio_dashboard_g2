// Estilos
import './App.css'

// Componentes
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'

//Contexto
import TokenContext from './context/TokenContext';

function App() {

  let usuario = "Alejandro";
  let menu = "DAW";

  const token = "12345";

  return (
    <TokenContext.Provider value={token}>
      <Cabecera usuario={usuario} />

      <div className="layout">
        <Roles menu={menu} />
        <Dashboard/>
      </div>
    </TokenContext.Provider>
  );
}

export default App;
