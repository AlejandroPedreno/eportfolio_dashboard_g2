import './Dashboard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';
import UserContext from '../../context/UserContext';
import NuevaEvidencia from '../Evidencia/NuevaEvidencia';

function Dashboard() {

    const token = useContext(TokenContext);
    const user = useContext(UserContext);

    return (
        <div className="dashboard p-3 h-100">
            MAIN {token} <br />
            Prueba usuario: {user}  
            <NuevaEvidencia />
        </div>
    );
}
export default Dashboard;
