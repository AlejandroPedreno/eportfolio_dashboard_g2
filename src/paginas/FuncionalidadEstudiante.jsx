import { useState } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import ProgresoCompletoAlumno from "./ProgresoCompletoAlumno";
import NuevaEvidencia from "./NuevaEvidencia";
import RevisionesPendientes from "./RevisionesPendientes";

function FuncionalidadEstudiante() {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      
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
  );
}

export default FuncionalidadEstudiante;
