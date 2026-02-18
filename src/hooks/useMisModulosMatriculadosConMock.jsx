import { useContext, useState, useEffect } from "react";
import mockMatriculados from "../mock/mock-matriculados";
import UserContext from "../context/UserContext";

function useMisModulosMatriculados() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);
    
    useEffect(() => {
        setLista(mockMatriculados[usuarioActual]?.lista || []);
    }, [usuarioActual]);
    return {
        buscando,
        lista
    };
}
export default useMisModulosMatriculados;