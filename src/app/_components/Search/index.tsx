"use client";
import { useState } from "react";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <input
      type="search"
      placeholder="Я ищу..."
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  );
};

export default Search;
