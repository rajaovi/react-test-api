import { useState } from "react";
import InputString from "../../component/textInput";
import Button from "../../component/button";
import axiosRes from "../../api/axiosRes";
import Backtohome from "../../component/backHome";

const Userchar = () => {
  const [startCharc, setStartChar] = useState("");
  const [endCharc, setEndChar] = useState("");
  const [apiData, setApiData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const alb = "abcdefghijklmnopqrstuvwxyz";
    const startIndex = alb.indexOf(startCharc);
    const endIndex = alb.indexOf(endCharc);
    let result = alb.slice(startIndex, endIndex + 1);
    axiosRes(
      "https://jsonplaceholder.typicode.com/users",
      (res) => {
        const data = res.data;
        const filteredData = data.filter((val) => {
          let userNameFirstChar = val.username.slice(0,1).toLowerCase();;
          return result.indexOf(userNameFirstChar) > -1 ? val : '';
        });
        console.log("filteredData",filteredData);
        setApiData(filteredData );
      },
      (err) => {
        alert("Error With the API");
      }
    );
  };

  return (
    <div className="userChar">
      <Backtohome />
      <form onSubmit={handleSubmit}>
        <p>
          <span>Start Char</span>
          <InputString
            inputType="text"
            inputReqired={true}
            inputPlaceholder="Enter Start Char"
            onChangeInput={setStartChar}
          />
          <h1>{startCharc}</h1>
        </p>
        <p>
          <span>End Char</span>
          <InputString
            inputType="text"
            inputReqired={true}
            inputPlaceholder="Enter End Char"
            onChangeInput={setEndChar}
          />
          <h1>{endCharc}</h1>
        </p>
        <p>
          <Button btnColor="blue" value="Submit" />
        </p>
      </form>
      <div>
        {apiData.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Username</th>
              </tr>
              <tr></tr>
              <tr></tr>
            </thead>
            <tbody>
              { apiData.map((val, ind) => {
                return (
                  <tr key={ind}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.username}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h1>Data Not Found</h1>
        )}
      </div>
      
    </div>
  );
};

export default Userchar;
