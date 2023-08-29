import React from "react";
import { useGlobalContext } from "../util/Context";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NextPage = () => {
  const { loading, hits, nbPages, page, query, setQuery, pageUp, pageDown } = useGlobalContext();
  return (
    <div className="page">
      <button className="btn" onClick={pageDown} disabled={loading}>
        <FaChevronLeft/>
      </button>
      <button className="not">
        Page {page + 1} of {nbPages}
      </button>
      <button className="btn" onClick={pageUp} disabled={loading}>
        <FaChevronRight/>
      </button>
    </div>
  );
};

export default NextPage;
