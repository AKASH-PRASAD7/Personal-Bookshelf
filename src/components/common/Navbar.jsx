import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillBackspaceFill } from "react-icons/bs";
const Navbar = () => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <>
      <nav className="w-full flex  justify-around bg-black text-white  ">
        <div className="flex gap-2 mx-12 my-auto  ">
          <img
            src="/book.png"
            className="h-12 w-12  my-auto cursor-pointer"
            alt="bookshelf"
          />
          <p className="text-2xl cursor-pointer font-semibold p-1">
            Personal BookShelf
          </p>
        </div>
        <div className=" my-auto relative  w-1/3  flex gap-2 ">
          <input
            type="text"
            value={search}
            placeholder="Search books"
            onChange={(e) => handleSearch(e)}
            className="text-black w-11/12 h-4/5 p-2 rounded-xl"
          />
          <BsFillBackspaceFill
            onClick={() => setSearch("")}
            className="absolute text-black right-12 top-2 text-2xl cursor-pointer"
          />
          <FaMagnifyingGlass className="text-2xl cursor-pointer m-1" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
