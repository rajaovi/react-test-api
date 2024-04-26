import { useEffect, useState } from "react";
import './pagination.scss';

const Pagination = ({totalCount, pageSize, startEndData}) => {

    const totalPageCount = Math.ceil(totalCount / pageSize);
    const [paginationNumber, setPaginationNumber] = useState([]);

    useEffect(()=> {
        let pageNumberArr = [];
        for( let i = 1; i <= totalPageCount; i++) {
            pageNumberArr.push(i);
        }
        setPaginationNumber(pageNumberArr);
    },[totalPageCount]);

    const handlePageNumber = (e, val) => {
      e.preventDefault();
      const pageMax = val * pageSize;
      const pageMin = pageMax - pageSize;
      startEndData(pageMin, pageMax)
    };

    return (
        <div className="pagination">
            <button>Prev</button>
            <ul>
                {
                    paginationNumber.map(val => <li key={val}><button onClick={e => handlePageNumber(e, val)}>{val}</button></li>)
                }
            </ul>
            <button>Next</button>
        </div>
    )
}

export default Pagination