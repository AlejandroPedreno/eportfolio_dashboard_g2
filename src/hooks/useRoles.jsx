import { useContext, useState } from "react";
import mockRoles from "../mock/mock-roles";
import UserContext from "../context/UserContext";

function useRoles() {

  const usuarioActual = useContext(UserContext);

  const [buscando, setBuscando] = useState(false);

  const [lista, setLista] = useState(
    mockRoles[usuarioActual]?.roles || []
  );

  return {
    buscando,
    lista
  };
}

export default useRoles;
