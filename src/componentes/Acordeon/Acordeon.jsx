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

    function mostrarAcordeon(opcionMenu, index) {
        return (
            <Accordion key={index}>
                <AccordionSummary
                    expandIcon={"^"}
                    aria-controls="panel1-content"
                    id="panel1-header"

                >
                    <Typography component="span" >{props.rol}</Typography>
                </AccordionSummary>
                {props.rol === "administrador" && opcionMenu.administrador.map(opcionAcordeon)}
            </Accordion>
        );
    }

    return (
        <>

            {props.lista.map(mostrarAcordeon)}
        </>
    );
};

export default Acordeon;
