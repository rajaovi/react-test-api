import { useEffect, useState } from "react";
import Backtohome from "../../component/backHome";
import axiosRes from "../../api/axiosRes";
import Table from "../../component/table";
import Apiloading from "../../component/apiLoading";

const Photolist = () => {

  const [photoListData, setPhotoListData] = useState([]);
  const [loadigMsg, setLoadingMessage] = useState(true)
  const tableColumns = ["id", "title", "url", "thumbnailUrl"];

  useEffect(() => {
    axiosRes(
      "https://jsonplaceholder.typicode.com/photos",
      (res) => {
        const data = res.data.slice(0, 100);
        setPhotoListData(data);
        setLoadingMessage(false);
      },
      (err) => {
        alert("Error With the API");
      }
    );
  }, []);

  return (
    <div className="photoList">
      <Backtohome />
      {
        loadigMsg ? <Apiloading /> : <Table columns={tableColumns} data={photoListData} paginationPerPage="15" />
      }
    </div>
  );
};

export default Photolist;
