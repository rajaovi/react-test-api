import React, { useState } from "react";
import "./index.scss";
import Pagination from "../pagination";

const Table = ({ columns, data, displayTablesPerPage }) => {

  const [arrayStartData, setArrayStartData] = useState(0);
  const [arrayEndData, setArrayEndData] = useState(displayTablesPerPage);

  const handleStartEndData = (start, end) => {
    setArrayStartData(start);
    setArrayEndData(end)
  }

  return (
    <div className="tableComponent">
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(arrayStartData,arrayEndData).map((row) => (
            <tr key={row.id}>
              {columns.map((column) => (
                <td key={column}>{row[column]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      { data.length > displayTablesPerPage ? <Pagination totalCount={data.length} pageSize={displayTablesPerPage}  startEndData={handleStartEndData} /> : '' }
      
    </div>
  );
};

export default Table;
