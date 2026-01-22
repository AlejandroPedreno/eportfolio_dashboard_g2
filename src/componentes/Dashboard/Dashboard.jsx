import './Dashboard.css';
import { useContext } from 'react';
import TokenContext from '../../context/TokenContext';

function Dashboard() {

    const token = useContext(TokenContext);

    return (
        <div className="dashboard p-3 h-100">
            MAIN {token}
        </div>
    );
}
export default Dashboard;
