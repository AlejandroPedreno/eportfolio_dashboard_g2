import './Roles.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';
import Acordeon from '../Acordeon/Acordeon';
import opcionesMenu from '../../mock/mock-administrador';
import useRoles from '../../hooks/useRoles';
import useMisModulosImpartidos from '../../hooks/useMisModulosImpartidos';
import useMisModulosMatriculados from '../../hooks/useMisModulosMatriculados';

function Roles(props) {

    const user = useContext(UserContext);
    const { lista: rolesUsuario } = useRoles();
    const { lista: impartidos } = useMisModulosImpartidos();
    const { lista: matriculados } = useMisModulosMatriculados();


    return (
        <div className="roles p-3 h-100">
            <div>
                {rolesUsuario.includes("docente") && (<Acordeon rol="docente" lista={[{ impartidos }]}/>)}
                {rolesUsuario.includes("estudiante") && (<Acordeon rol="estudiante" lista={[{ estudiante:matriculados }]}/>)}
                {rolesUsuario.includes("administrador") && (<Acordeon rol="administrador" lista={[opcionesMenu]} />)}
            </div>
            <p>ROLES {props.menu}</p><br />
            <p>Prueba usuario: {user}</p>
        </div>
    );
}

export default Roles;