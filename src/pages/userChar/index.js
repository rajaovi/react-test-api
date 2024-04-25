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
    axiosRes(
        'https://jsonplaceholder.typicode.com/users',
        (res) => {
            const data = res.data;
            console.log('data',data);
            setApiData(data)
        },
        (err) => {
            alert('Error With the API');
        }
    );
}

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

      </div>
    </div>
  );
};

export default Userchar;
