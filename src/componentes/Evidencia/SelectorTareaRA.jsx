import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import useMismodulosTareasRa from "../../hooks/useMisModulosTareasRa";

function SelectorTareaRA({ onSelectTarea }) {
    const [tareaSeleccionadaId, setTareaSeleccionadaId] = useState("");
    const { tareas } = useMismodulosTareasRa();

    const tareasRA = tareas || { lista: [] };

    function handleChange(event) {
        const idSeleccionado = event.target.value;
        setTareaSeleccionadaId(idSeleccionado);

        const tareaSeleccionada = tareasRA.lista.find((t) => t.id === idSeleccionado);
        onSelectTarea(tareaSeleccionada);
    }

    console.log("Tareas disponibles para RA:", tareasRA.lista);
    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="selector-tarea-label">Tarea</InputLabel>

                <Select
                    labelId="selector-tarea-label"
                    id="selector-tarea"
                    value={tareaSeleccionadaId}
                    label="Tarea"
                    onChange={handleChange}
                >
                        <MenuItem value="">Sin seleccionar</MenuItem>
                        {tareas?.lista.map((tarea) => (
                            <MenuItem key={tarea.id} value={tarea.id}>
                                {tarea.observaciones}
                            </MenuItem>
                        ))}
                </Select>
            </FormControl>
        </Box>
    );
}

export default SelectorTareaRA;
