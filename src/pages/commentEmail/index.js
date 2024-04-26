import { useState } from "react";
import axiosRes from "../../api/axiosRes";
import "./index.scss";
import Backtohome from "../../component/backHome";
import InputString from "../../component/textInput";
import Table from "../../component/table";
import Button from "../../component/button";

const Commentemail = () => {
  const [inputVal, setInputVal] = useState("");
  const [commentData, setCommentData] = useState([]);

  const tableColumns = ["id", "name", "email"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputVal", inputVal);
    axiosRes(
      "https://jsonplaceholder.typicode.com/comments",
      (res) => {
        const data = res.data;
        let newData = data.filter((val) => {
          var str = val.email;
          var splitEmail = str.split("@")[1];
          return splitEmail.includes(inputVal) ? val : "";
        });
        console.log("data", newData);
        setCommentData(newData);
      },
      (err) => {
        alert("Error With the API");
      }
    );
  };
  return (
    <div>
      <Backtohome />
      <form onSubmit={handleSubmit} className="input">
        <span>Enter Email Domain</span>
        <InputString
          inputType="text"
          inputReqired={true}
          inputPlaceholder="Enter Domain"
          onChangeInput={setInputVal}
        />
        <Button btnColor="green" value="Submit" />
      </form>
      {commentData.length > 0 ? (
        <Table columns={tableColumns} data={commentData} />
      ) : (
        <h2>Data Not Foud</h2>
      )}
    </div>
  );
};

export default Commentemail;
