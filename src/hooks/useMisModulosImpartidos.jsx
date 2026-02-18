import { useContext, useState, useEffect } from "react";
import mockImpartidos from "../mock/mock-impartidos";
import UserContext from "../context/UserContext";

function useMisModulosImpartidos() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(false);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        setLista(mockImpartidos[usuarioActual]?.lista || []);
    }, [usuarioActual]);
    return {
        buscando,
        lista
    };
}
export default useMisModulosImpartidos;
