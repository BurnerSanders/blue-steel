import React from "react";

function Search({handleSearch, filter, sortBy, handleSort}) {
  

  return (
    <div>
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleSearch}
        value={filter}
      />
      <i className="circular search link icon"></i>
    </div>
    <strong>Sort by: </strong>
      <div class="ui radio checkbox">
        <input 
          type="radio"
          value="Description"
          checked={sortBy === "Description"}
          onChange={handleSort}
        />
        <label style={{marginRight : '10px'}}>Description</label>
        </div>
        <div class="ui radio checkbox">
        <input
          type="radio"
          value="Category"
          checked={sortBy === 'Category'}
          onChange={handleSort}
        />
        <label>Category</label>
        </div>

    </div>
  );
}

export default Search;
