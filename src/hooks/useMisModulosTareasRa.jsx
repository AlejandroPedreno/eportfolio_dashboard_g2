import { useEffect, useState } from "react";
import getAllTareas from "../servicios/getAllTareas";

const useMismodulosTareasRa = () => {
  const [tareas, setTareas] = useState(null);

  useEffect(() => {
    getAllTareas()
      .then((data) => {
        setTareas(data);
      })
      .catch(() => {
        setTareas({ buscando: false, lista: [] });
      });
  }, []);

  return { tareas };
};

export default useMismodulosTareasRa;
