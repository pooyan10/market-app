import React from "react";
import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../../helper/helper";

function SearchBox({ search, setSearch, setQuery }) {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="flex items-center pt-4">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        type="text"
        placeholder="search"
        className="border-2 border-dotted border-orange-500/30 rounded-lg hover:bg-gray-100/70  ml-6 px-2 py-1 outline-none focus:ring-2 ring-orange-300 "
      />
      <button
        onClick={searchHandler}
        className="p-2 ml-2 text-lg text-orange-600 border rounded-xl  transition-all duration-50 hover:ring hover:scale-90 ring-orange-500/40 mr-5"
      >
        <ImSearch />
      </button>
    </div>
  );
}

export default SearchBox;
