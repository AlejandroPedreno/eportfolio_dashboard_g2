import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Acordeon = (props) => {

    function opcionAcordeon(opcion) {
        return (
            <AccordionDetails key={opcion.nombre}>
                <Link to={opcion.ruta}>{opcion.nombre}</Link>
            </AccordionDetails>
        );
    }
    
    function opcionImpartido(modulo){
        return (
            <AccordionDetails key={modulo.id}>
                <Link to={"/funcionalidaddocente/" + modulo.id}>{modulo.nombre}</Link>
            </AccordionDetails>
        );
    }

    function opcionEstudiante(modulo){
        return (
            <AccordionDetails key={modulo.id}>
                <Link to={"/funcionalidadestudiante/" + modulo.id}>{modulo.nombre}</Link>
            </AccordionDetails>
        );
    }

function mostrarAcordeon(opcionMenu, index) {

    const modulos = opcionMenu.impartidos || [];
    const opcionesAdmin = opcionMenu.administrador || [];
    const opcionesEstudiante = opcionMenu.estudiante || [];

    return (
        <Accordion key={index}>
            <AccordionSummary
                expandIcon={"^"}
                aria-controls="panel-content"
                id="panel-header"
            >
                <Typography component="span">{props.rol}</Typography>
            </AccordionSummary>
            {props.rol === "administrador" && opcionesAdmin.map(opcionAcordeon)}
            {props.rol === "docente" && modulos.map(opcionImpartido)}
            {props.rol === "estudiante" && opcionesEstudiante.map(opcionEstudiante)}

        </Accordion>
    );
}


return (
  <>
    {(props.lista || []).map(mostrarAcordeon)}
  </>
);
};

export default Acordeon;
