import './Dashboard.css';

export default function Dashboard(props) {
    return (
        <div className="dashboard p-3 h-100">
            MAIN {props.token}
        </div>
    );
}
