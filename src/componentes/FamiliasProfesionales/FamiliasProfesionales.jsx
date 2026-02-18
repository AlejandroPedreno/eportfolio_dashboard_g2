import useAllFamiliasProfesionales from "../../hooks/useAllFamiliasProfesionales";
import BasicTable from "../../componentes/BasicTable/BasicTable";
function FamiliasProfesionales() {
  const familias = useAllFamiliasProfesionales();

  if (familias.cargando) {
    return <p>Cargando familias profesionales...</p>;
  }

  const columns = [
    { header: "ID", accessor: "id" },
    { header: "Código", accessor: "codigo" },
    { header: "Nombre", accessor: "nombre" },
  ];

  return (
    <div className="familias-profesionales">
      <h1>FAMILIAS PROFESIONALES</h1>
      <BasicTable columns={columns} data={familias.lista} />
    </div>
  );
}

export default FamiliasProfesionales;
