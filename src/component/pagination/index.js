import { useEffect, useState } from "react";
import "./pagination.scss";

const Pagination = ({
  totalCount,
  pageSize,
  startEndData,
  activePageNum = 1,
}) => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const [paginationNumber, setPaginationNumber] = useState([]);
  const [activePageNumber, setActivePageNumber] = useState(activePageNum);
  const [disablePrevBtn, setdDisablePrevBtn] = useState(true);
  const [disableNextBtn, setdDisableNextBtn] = useState(false);
  const [disablePageFirstBtn, setdDisablePageFirstBtn] = useState(true);
  const [disablePageLastBtn, setDidisablePageLastBtn] = useState(false);
  const firstItem = paginationNumber[0];
  const lastItem = paginationNumber[paginationNumber.length - 1];

  useEffect(() => {
    let pageNumberArr = [];
    for (let i = 1; i <= totalPageCount; i++) {
      pageNumberArr.push(i);
    }
    setPaginationNumber(pageNumberArr);
  }, [totalPageCount]);

  const startEndPageNum = (curNum) => {
    const pageMax = curNum * pageSize;
    const pageMin = pageMax - pageSize;
    setActivePageNumber(curNum);
    startEndData(pageMin, pageMax);
  };

  const handlePageNumber = (e, curNum) => {
    e.preventDefault();
    if(curNum === firstItem) {
        setdDisablePrevBtn(true);
        setdDisableNextBtn(false);
        setdDisablePageFirstBtn(true);
        setDidisablePageLastBtn(false);
    }
    else if(curNum === lastItem) {
        setdDisablePrevBtn(false);
        setdDisableNextBtn(true);
        setdDisablePageFirstBtn(false);
        setDidisablePageLastBtn(true);
    }
    else {
        setdDisablePrevBtn(false);
        setdDisableNextBtn(false);
        setdDisablePageFirstBtn(false);
        setDidisablePageLastBtn(false);
    }
    startEndPageNum(curNum);
  };

  const handlePrev = (e, curNum) => {
    e.preventDefault();
    const changePageNum = curNum - 1;
    if(changePageNum === firstItem) {
        setdDisablePrevBtn(true);
        setdDisableNextBtn(false);
        setdDisablePageFirstBtn(true);
        setDidisablePageLastBtn(false);
    }
    else {
        setdDisablePrevBtn(false);
        setdDisableNextBtn(false);
        setdDisablePageFirstBtn(false);
        setDidisablePageLastBtn(false);
    }
    startEndPageNum(changePageNum);
    setdDisableNextBtn(false);
  };

  const handleNext = (e, curNum) => {
    e.preventDefault();
    const changePageNum = curNum + 1;
    if(changePageNum === lastItem) {
        setdDisablePrevBtn(false);
        setdDisableNextBtn(true);
        setdDisablePageFirstBtn(false);
        setDidisablePageLastBtn(true);
    }
    else {
        setdDisablePrevBtn(false);
        setdDisableNextBtn(false);
        setdDisablePageFirstBtn(false);
        setDidisablePageLastBtn(false);
    }
    startEndPageNum(changePageNum);
    setdDisablePrevBtn(false);
  };

  const handleFirstPage = (e) => {
    e.preventDefault();
    startEndPageNum(firstItem);
    setdDisablePrevBtn(true);
    setdDisableNextBtn(false);
    setdDisablePageFirstBtn(true);
    setDidisablePageLastBtn(false);
  };

  const handleLastPage = (e) => {
    e.preventDefault();
    startEndPageNum(lastItem);
    setdDisablePrevBtn(false);
    setdDisableNextBtn(true);
    setdDisablePageFirstBtn(false);
    setDidisablePageLastBtn(true);
  };

  return (
    <div className="pagination">
      <button
        onClick={(e) => handleFirstPage(e)}
        className={`firstLast firstPage ${
          disablePageFirstBtn ? "disableBtn" : ""
        }`}
      ></button>
      <button
        onClick={(e) => handlePrev(e, activePageNumber)}
        className={`prevNext prev ${disablePrevBtn ? "disableBtn" : ""}`}
      ></button>
      <ul className="paginationList">
        {paginationNumber.map((val) => (
          <li key={val}>
            <button
              className={`paginationNum ${
                activePageNumber === val ? "active" : ""
              }`}
              onClick={(e) => handlePageNumber(e, val)}
            >
              {val}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={(e) => handleNext(e, activePageNumber)}
        className={`prevNext next ${disableNextBtn ? "disableBtn" : ""}`}
      ></button>
      <button
        onClick={(e) => handleLastPage(e)}
        className={`firstLast lastPage ${
          disablePageLastBtn ? "disableBtn" : ""
        }`}
      ></button>
    </div>
  );
};

export default Pagination;
