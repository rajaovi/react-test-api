import React, { useState } from "react";
import "./index.scss";
import Pagination from "../pagination";

const Table = ({ columns, data, paginationPerPage, activePageNumber="1" }) => {

  const [arrayStartData, setArrayStartData] = useState(0);
  const [arrayEndData, setArrayEndData] = useState(paginationPerPage);

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

      { data.length > paginationPerPage ? <Pagination totalCount={data.length} pageSize={paginationPerPage}  startEndData={handleStartEndData} activePageNumber={activePageNumber} /> : '' }
      
    </div>
  );
};

export default Table;
