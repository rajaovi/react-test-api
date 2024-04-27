import { useEffect, useState } from "react";
import './pagination.scss';

const Pagination = ({totalCount, pageSize, startEndData, activePageNum=1}) => {

    console.log("activePageNum", activePageNum);

    const totalPageCount = Math.ceil(totalCount / pageSize);
    const [paginationNumber, setPaginationNumber] = useState([]);
    const [activePageNumber, setActivePageNumber] = useState(activePageNum);
    const [disablePrevBtn, setdDisablePrevBtn] = useState(true);
    const [disableNextBtn, setdDisableNextBtn] = useState(false);

    useEffect(()=> {
        let pageNumberArr = [];
        for( let i = 1; i <= totalPageCount; i++) {
            pageNumberArr.push(i);
        }
        setPaginationNumber(pageNumberArr);
    },[totalPageCount]);

    const startEndPageNum = (curNum) => {
        const pageMax = curNum * pageSize;
        const pageMin = pageMax - pageSize;
        setActivePageNumber(curNum);
        startEndData(pageMin, pageMax);

    }

    const handlePageNumber = (e, curNum) => {
      e.preventDefault();
      startEndPageNum(curNum);
    };

    const handlePrev = (e,curNum) => {
        e.preventDefault();
        const changePageNum = curNum - 1;
        const firstItem = paginationNumber[0];
        changePageNum === firstItem ? setdDisablePrevBtn(true) : setdDisablePrevBtn(false);
        startEndPageNum(changePageNum);
        setdDisableNextBtn(false);
    }

    const handleNext = (e,curNum) => {
        e.preventDefault();
        const changePageNum = curNum + 1;
        const lastItem = paginationNumber[paginationNumber.length-1];
        changePageNum === lastItem ? setdDisableNextBtn(true) : setdDisableNextBtn(false);
        startEndPageNum(changePageNum);
        setdDisablePrevBtn(false);
    }

    return (
        <div className="pagination">
            <button className="firstLast firstPage"></button>
            <button onClick={e => handlePrev(e, activePageNumber)} className={`prevNext prev ${disablePrevBtn ? 'disableBtn' : ''}`}></button>
            <ul className="paginationList">
                {
                    paginationNumber.map(val => <li key={val}><button className={`paginationNum ${activePageNumber === val ? 'active': ''}`} onClick={e => handlePageNumber(e, val)}>{val}</button></li>)
                }
            </ul>
            <button onClick={e => handleNext(e, activePageNumber)} className={`prevNext next ${disableNextBtn ? 'disableBtn' : ''}`}></button>
            <button className="firstLast lastPage"></button>
        </div>
    )
}

export default Pagination