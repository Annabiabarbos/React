import React from "react";
import "./TableTp.css";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";

// Componente funcional TableTp que recebe propriedades dados, fnDelete e fnUpdate
const TableTp = ({ dados, fnDelete = null, fnUpdate = null }) => {
  return (
    // Tabela com a classe CSS "table-data"
    <table className="table-data">
      {/* Cabeçalho da tabela */}
      <thead className="table-data__head">
        {/* Linha do cabeçalho */}
        <tr className="table-data__head-row">
          {/* Coluna de título  */}
          <th className="table-data__head-title table-data__head-title--big">
            Título
          </th>
          {/* Coluna de editar  */}
          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          {/* Coluna de deletar */}
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>
      {/* Corpo da tabela */}
      <tbody>
        {/* Mapeia os dados e cria uma linha para cada tipo de evento */}
        {dados.map((tp) => {
          return (
            <tr className="table-data__head-row" key={tp.idTipoEvento}>
              {/* Coluna de dados grande exibindo o título do tipo de evento */}
              <td className="table-data__data table-data__data--big">
                {tp.titulo}
              </td>
              {/* Coluna de editar com ícone de lápis */}
              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={editPen}
                  alt=""
                  onClick={() => {
                    fnUpdate(tp.idTipoEvento);
                  }}
                />
              </td>
              {/* Coluna de deletar com ícone de lixeira */}
              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={trashDelete}
                  alt=""
                  onClick={() => {
                    fnDelete(tp.idTipoEvento);
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

// Exporta o componente TableTp como padrão
export default TableTp;
