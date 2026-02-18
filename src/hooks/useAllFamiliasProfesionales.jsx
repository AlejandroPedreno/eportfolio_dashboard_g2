import { useEffect, useState } from "react";
import getAllFamiliasProfesionales from "../servicios/getAllFamiliasProfesionales";

const useAllFamiliasProfesionales = () => {
  const [familias, setFamilias] = useState({ cargando: true, lista: [] });

  useEffect(() => {
    getAllFamiliasProfesionales()
      .then((data) => {

        setFamilias({ cargando: false, lista: data.data || [] });
      })
      .catch(() => {
        setFamilias({ cargando: false, lista: [] });
      });
  }, []);

  return familias;
};

export default useAllFamiliasProfesionales;
