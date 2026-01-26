import { useContext } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { TextField, Button, Box, Stack } from "@mui/material";
import UserContext from "../../context/UserContext";

function NuevaEvidenciaForm({ tarea, onSubmitEvidencia }) {

    const user = useContext(UserContext);

    const EVIDENCIA = {
        TAREA_ID: "tarea_id",
        ESTUDIANTE_ID: "estudiante_id",
        URL: "url",
        DESCRIPCION: "descripcion",
        ESTADO_VALIDACION: "estado_validacion"
    }

    const EVIDENCIAINICIAL = {
        tarea_id: tarea ? tarea.id : "",
        estudiante_id: user,
        url: "",
        descripcion: "",
        estado_validacion: "pendiente"
    };


    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
        watch } = useForm({ defaultValues: EVIDENCIAINICIAL });

    console.log(errors);

    function onSubmit(data) {
        const evidencia = {
            tarea_id: tarea.id,
            estudiante_id: user,
            url: data.url,
            descripcion: data.descripcion,
            estado_validacion: "pendiente"
        };

        onSubmitEvidencia(evidencia);
    }

    return (

        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ minWidth: 120 }}
        >
            <Stack spacing={2}>
                <TextField
                    label="URL"
                    fullWidth
                    {...register(EVIDENCIA.URL, {
                        required: "La URL es obligatoria",
                        pattern: {
                            value: /^(http|https):\/\/[^ "]+$/,
                            message: "Introduce una URL válida"
                        }
                    })}
                    error={!!errors[EVIDENCIA.URL]}
                    helperText={errors[EVIDENCIA.URL]?.message}
                />
                <TextField
                    label="Observaciones"
                    fullWidth
                    multiline
                    rows={4}
                    {...register(EVIDENCIA.DESCRIPCION, { required: "La descripción es obligatoria" })}
                    error={!!errors[EVIDENCIA.DESCRIPCION]}
                    helperText={errors[EVIDENCIA.DESCRIPCION]?.message}
                />

                <Button type="submit" variant="contained" color="primary">
                    Añadir Evidencia
                </Button>
            </Stack>
        </Box >

    );
}

export default NuevaEvidenciaForm;
