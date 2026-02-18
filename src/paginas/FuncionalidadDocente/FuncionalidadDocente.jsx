import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import "./FuncionalidadDocente.css";
import AsignarRevisiones from "../../componentes/FuncionesDocente/AsignarRevisiones/AsignarRevisiones";
import EvaluarEvidencia from "../../componentes/FuncionesDocente/EvaluarEvidencia/EvaluarEvidencia";
import PlanificarCriterios from "../../componentes/FuncionesDocente/PlanificarCriterios/PlanificarCriterios";

function FuncionalidadDocente() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="funcionalidad-docente">
            <Box sx={{
            }}>

                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    <Tab label="PLANIFICAR CRITERIOS" />
                    <Tab label="EVALUAR EVIDENCIAS" />
                    <Tab label="ASIGNAR REVISIONES" />
                </Tabs>

                <Box sx={{ p: 3 }}>
                    {value === 0 && <PlanificarCriterios />}
                    {value === 1 && <EvaluarEvidencia />}
                    {value === 2 && <AsignarRevisiones />}
                </Box>

            </Box>
        </div>
    );
}

export default FuncionalidadDocente;
