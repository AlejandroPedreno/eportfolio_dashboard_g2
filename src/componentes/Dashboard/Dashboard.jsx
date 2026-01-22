import './Dashboard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';
import UserContext from '../../context/UserContext';

function Dashboard() {

    const token = useContext(TokenContext);
    const user = useContext(UserContext);

    return (
        <div className="dashboard p-3 h-100">
            MAIN {token} <br />
            Prueba usuario: {user}  
        </div>
    );
}
export default Dashboard;
