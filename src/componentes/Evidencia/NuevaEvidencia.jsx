import { useState } from "react";
import SelectorTareaRA from "./SelectorTareaRA";
import NuevaEvidenciaForm from "./NuevaEvidenciaForm";

function NuevaEvidencia() {

  const [tareaSeleccionada, setTareaSeleccionada] = useState(null);

  function handleTareaSeleccionada(tarea) {
    setTareaSeleccionada(tarea);
  }

  function handleNuevaEvidencia(evidencia) {
    console.log("Evidencia creada:", evidencia);
  }

  return (
    <div>

      <SelectorTareaRA onSelectTarea={handleTareaSeleccionada} />
      <br />
      <NuevaEvidenciaForm
        tarea={tareaSeleccionada}
        onSubmitEvidencia={handleNuevaEvidencia}
      />
    </div>
  );
}

export default NuevaEvidencia;
