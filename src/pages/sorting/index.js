import React, { useEffect, useState } from "react";
import axiosRes from "../../api/axiosRes";

const SortingTable = (props) => {
  const [data, setData] = useState([]);

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
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Id <span>$</span>
            </th>
            <th>
              Name<span>$</span>
            </th>
            <th>
              Email<span>$</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
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
