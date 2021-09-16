import React, { useState, useEffect } from "react";
import { useGlobalContext } from "../util/Context";

const SearchForm = () => {
  const { loading, hits, nbPages, page, query, setQuery } = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>Search Hacker News</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {/* {error.show && <div className='error'>{error.msg}</div>} */}
    </form>
  );
  // return null;
};

export default SearchForm;
