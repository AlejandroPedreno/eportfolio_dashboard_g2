import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import getAllMatriculados from "../servicios/getAllMatriculados";

function useMisModulosMatriculados() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {

        setBuscando(true);

        getAllMatriculados()
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

export default useMisModulosMatriculados;
