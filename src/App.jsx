import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cabecera from './componentes/Cabecera/Cabecera'
import Dashboard from './componentes/Dashboard/Dashboard'
import Roles from './componentes/Roles/Roles'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div></div>
      <Cabecera></Cabecera>
      <Dashboard></Dashboard>
      <Roles></Roles>
    </>
  )
}

export default App
