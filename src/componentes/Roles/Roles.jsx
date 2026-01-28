import './Roles.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Acordeon from '../Acordeon/Acordeon';
import opcionesMenu from '../../mock/mock-administrador';
import { BrowserRouter } from 'react-router-dom';
import useRoles from '../../hooks/useRoles';

function Roles(props) {

    const user = useContext(UserContext);
    const { lista: rolesUsuario } = useRoles();

    return (
        <div className="roles p-3 h-100">
            <div>
                <BrowserRouter>
                    {rolesUsuario.includes("docente") && (<Acordeon lista={[opcionesMenu]} rol="docente" />)}
                    {rolesUsuario.includes("estudiante") && (<Acordeon lista={[opcionesMenu]} rol="estudiante" />)}
                    {rolesUsuario.includes("administrador") && (<Acordeon lista={[opcionesMenu]} rol="administrador" />)}
                </BrowserRouter>
            </div>
            <p>ROLES {props.menu}</p><br />
            <p>Prueba usuario: {user}</p>

        </div>
    );
}

export default Roles;