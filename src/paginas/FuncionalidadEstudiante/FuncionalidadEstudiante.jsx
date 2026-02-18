import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import "./FuncionalidadEstudiante.css";
import ProgresoCompletoAlumno from "../../componentes/Progreso/ProgresoCompletoAlumno";
import NuevaEvidencia from "../../componentes/Evidencia/NuevaEvidencia";
import RevisionesPendientes from "../../componentes/Revisiones/RevisionesPendientes";

function FuncionalidadEstudiante() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="funcionalidad-estudiante">
            <Box sx={{
            }}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <Tab label="MI PROGRESO COMPLETO" />
                    <Tab label="SUBIR NUEVA EVIDENCIA" />
                    <Tab label="MIS REVISIONES PENDIENTES" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                    {value === 0 && <ProgresoCompletoAlumno />}
                    {value === 1 && <NuevaEvidencia />}
                    {value === 2 && <RevisionesPendientes />}
                </Box>

            </Box>
        </div>
    );
}

export default FuncionalidadEstudiante;
