import './Roles.css';

function Roles(props) {
    return (
        <div className="roles p-3 h-100">
            <p>ROLES {props.menu}</p>
        </div>
    );
}

export default Roles;