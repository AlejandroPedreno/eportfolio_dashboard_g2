import './Cabecera.css';

export default function Cabecera(props) {
    return (
        <div className="cabecera text-center pb-5">
            HEADER {props.usuario}
        </div>
    );
}
