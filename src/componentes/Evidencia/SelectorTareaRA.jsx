import { useState } from "react";
import tareasRA from "../../mock/mock-tareasRA";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Menu from "@mui/material/Menu";

function SelectorTareaRA({ onSelectTarea }) {

    const [tareaSeleccionadaId, setTareaSeleccionadaId] = useState("");

    function handleChange(event) {

        const idSeleccionado = event.target.value;
        setTareaSeleccionadaId(idSeleccionado);

        const tareaSeleccionada = tareasRA.lista.find(function (tarea) {
            return tarea.id === idSeleccionado;
        });

        onSelectTarea(tareaSeleccionada);
    }

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
                    displayEmpty
                >
                    <MenuItem value=""> Sin seleccionar </MenuItem>
                    {tareasRA.lista.map(tarea => (
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
