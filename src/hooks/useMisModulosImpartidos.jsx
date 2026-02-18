import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import getAllImpartidos from "../servicios/getAllImpartidos";

function useMisModulosImpartidos() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {

        setBuscando(true);

        getAllImpartidos()
            .then((data) => {

                const modulosUsuario = data[usuarioActual]?.lista || [];

                setLista(modulosUsuario);
            })
            .catch(() => {
                setLista([]);
            })
            .finally(() => {
                setBuscando(false);
            });

    }, [usuarioActual]);

    return {
        buscando,
        lista
    };
}

export default useMisModulosImpartidos;
