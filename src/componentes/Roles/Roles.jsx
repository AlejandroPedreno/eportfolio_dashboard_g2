import './Roles.css';
import { useContext } from 'react';
import UserContext from '../../context/UserContext';

function Roles(props) {

    const user = useContext(UserContext);

    return (
        <div className="roles p-3 h-100">
            <p>ROLES {props.menu}</p><br />
            <p>Prueba usuario: {user}</p>
        </div>
    );
}

export default Roles;