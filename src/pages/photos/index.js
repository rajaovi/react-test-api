import { useEffect, useState } from "react";
import Backtohome from "../../component/backHome";
import axiosRes from "../../api/axiosRes";
import Table from "../../component/table";

const Photolist = () => {

  const [photoListData, setPhotoListData] = useState([]);
  const tableColumns = ["id", "title", "url", "thumbnailUrl"];

  useEffect(() => {
    axiosRes(
      "https://jsonplaceholder.typicode.com/photos",
      (res) => {
        const data = res.data.slice(0, 100);
        setPhotoListData(data);
      },
      (err) => {
        alert("Error With the API");
      }
    );
  }, []);

  return (
    <div className="photoList">
      <Backtohome />
      <Table columns={tableColumns} data={photoListData} paginationPerPage="20" />
    </div>
  );
};

export default Photolist;
