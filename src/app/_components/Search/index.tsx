"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import styles from "./search.module.scss";
import SearchSvg from "@/_assets/images/general/search.svg";
import SearchProps from "@/_components/Search/Search.interface";

const Search = ({ onClickSearchBtn, searchClassname }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div
      className={classNames(styles.root, searchClassname && searchClassname)}
    >
      <input
        className={styles.search}
        type="search"
        placeholder="Я ищу..."
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
      />
      <button className={styles.searchBtn} onClick={onClickSearchBtn}>
        <Image src={SearchSvg} alt={"иконка поиска"} width={18} height={18} />
      </button>
    </div>
  );
};

export default Search;
