import { useContext, useState } from "react";
import mocksImpartidos from "../mock/mock-modulosImpartidos";
import UserContext from "../context/UserContext";

function useMisModulosImpartidos() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);

    const [lista, setLista] = useState(
        mocksImpartidos[usuarioActual]?.lista || []
    );

    return {
        buscando,
        lista
    };
}
export default useMisModulosImpartidos;