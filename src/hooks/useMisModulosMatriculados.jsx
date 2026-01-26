import { useContext, useState } from "react";
import mockMatriculados from "../mock/mock-matriculados";
import UserContext from "../context/UserContext";

function useMisModulosMatriculados() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(
        mockMatriculados[usuarioActual]?.lista || []
    );

    return {
        buscando,
        lista
    };
}
export default useMisModulosMatriculados;