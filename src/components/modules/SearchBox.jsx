import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        type="text"
        placeholder="search"
        className="border rounded-lg hover:bg-gray-100/70 mt-10 mb-5 ml-8 p-1 pl-2 outline-none focus:ring-2 ring-orange-300 "
      />
      <button onClick={searchHandler} className="p-2 ml-2 mt-2 r">
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
