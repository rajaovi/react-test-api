import React, { useEffect, useState, useMemo } from "react";
import axiosRes from "../../api/axiosRes";

const SortingTable = (props) => {
  const [data, setData] = useState([]);
  const [sortType, setSortType] = useState("default");

  useEffect(() => {
    axiosRes(
      "https://jsonplaceholder.typicode.com/comments",
      (res) => {
        const data = res.data;
        setData(data);
      },
      (err) => {
        alert("Error With the API");
      }
    );
  });

  const sortedData = useMemo(() => {
    let result = data;

    if (sortType === "descending") {
      result = [...data].sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    } else if (sortType === "ascending") {
      result = [...data].sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }

    return result;
  }, [data, sortType]);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              <span>ID</span>
            </th>
            <th>
              <span>Name</span>
              <select
                defaultValue="default"
                onChange={(e) => setSortType(e.target.value)}
              >
                <option disabled value="default">
                  Sort by
                </option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </th>
            <th>
              Email<span>$</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SortingTable;
