import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'

function App() {

  let usuario = "Alejandro";
  let token = "12345";
  let menu = "DAW";

  return (
    <>
      <Cabecera usuario={usuario} />

      <div className="layout">
        <Roles menu={menu} />
        <Dashboard token={token} />
      </div>
    </>
  );
}

export default App;
