import React from "react";
import "./TableEv.css";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";

const TableEv = ({ dados }) => {
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Titulo
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Tipo de Evento
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descrição
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Deletar
          </th>
        </tr>
      </thead>
      <tbody>
       {/*{dados.map((ev) => {
        return(
          <tr className="table-data__head-row" key={ev.idEvento}></tr>
        )
       })}*/}
      </tbody>
    </table>
  );
};

export default TableEv;
