import { useState } from "react";
import InputString from "../../component/textInput";
import Button from "../../component/button";
import axiosRes from "../../api/axiosRes";
import Backtohome from "../../component/backHome";
import "./index.scss";
import Table from "../../component/table";

const Userchar = () => {
  const [startCharc, setStartChar] = useState("");
  const [endCharc, setEndChar] = useState("");
  const [apiData, setApiData] = useState([]);

  const tableColumns = ["id", "firstName", "username"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const alb = "abcdefghijklmnopqrstuvwxyz";
    const startIndex = alb.indexOf(startCharc);
    const endIndex = alb.indexOf(endCharc);
    let result = alb.slice(startIndex, endIndex + 1);
    axiosRes(
      "https://dummyjson.com/users",
      (res) => {
        const data = res.data.users;
        const filteredData = data.filter((val) => {
          let userNameFirstChar = val.username.slice(0, 1).toLowerCase();
          return result.indexOf(userNameFirstChar) > -1 ? val : "";
        });
        console.log("filteredData", filteredData);
        setApiData(filteredData);
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
          <span>Start Character</span>
          <InputString
            inputType="text"
            inputReqired={true}
            inputPlaceholder="Enter Start Character"
            onChangeInput={setStartChar}
          />
        </p>
        <p>
          <span>End Character</span>
          <InputString
            inputType="text"
            inputReqired={true}
            inputPlaceholder="Enter End Character"
            onChangeInput={setEndChar}
          />
        </p>
        <p>
          <Button btnColor="blue" value="Submit" />
        </p>
      </form>
      <div>
        {apiData.length > 0 ? (
          <Table columns={tableColumns} data={apiData} paginationPerPage="5" />
        ) : (
          <h1>Data Not Found</h1>
        )}
      </div>
    </div>
  );
};

export default Userchar;
