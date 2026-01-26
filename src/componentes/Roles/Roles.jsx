import './Roles.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Acordeon from '../Acordeon/Acordeon';
import opcionesMenu from '../../mock/mock-administrador';
import { BrowserRouter } from 'react-router-dom';

function Roles(props) {

    const user = useContext(UserContext);

    return (
        <div className="roles p-3 h-100">
            <div>
                <BrowserRouter>
                    <Acordeon lista={[opcionesMenu]} rol="docente" />
                    <Acordeon lista={[opcionesMenu]} rol="estudiante" />
                    <Acordeon lista={[opcionesMenu]} rol="administrador" />
                </BrowserRouter>
            </div>
            <p>ROLES {props.menu}</p><br />
            <p>Prueba usuario: {user}</p>

        </div>
    );
}

export default Roles;