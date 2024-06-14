import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

const SearchBar = ({ onOpen, filterContacts }) => {
  return (
    <div className="flex gap-2">
      <div className="relative flex items-center flex-grow">
        <FaMagnifyingGlass className="ml-1 absolute text-3xl text-white" />
        <input
          onChange={filterContacts}
          type="text"
          className="bg-transparent flex-grow h-10 rounded-md border border-white text-white pl-10 "
        />
      </div>
      <IoIosAddCircle
        onClick={onOpen}
        className="text-5xl text-white cursor-pointer"
      />
    </div>
  );
};

export default SearchBar;
