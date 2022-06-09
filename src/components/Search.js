import React, { useState } from "react";
import "./search.css";

const Search = ({ onSearch }) => {
  const [search, setSearch] = useState("");
  return (
    
      <div className="search_wrapper">
        <input
          type="text"
          className="search_box"
          value={search}
          placeholder="Location"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search_button" onClick={() => onSearch(search)}>
          <span>find</span>
        </button>
      </div>
    
  );
};

export default Search;
