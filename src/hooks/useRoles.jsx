import { useContext, useState, useEffect } from "react";
import UserContext from "../context/UserContext";
import getAllRoles from "../servicios/getAllRoles";

function useRoles() {

    const usuarioActual = useContext(UserContext);

    const [buscando, setBuscando] = useState(true);
    const [lista, setLista] = useState([]);

    useEffect(() => {
        setBuscando(true);

        getAllRoles()
            .then((data) => {

                const usuario = data.find(
                    (u) => u.name === usuarioActual
                );

                setLista(usuario?.roles || []);
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

export default useRoles;
