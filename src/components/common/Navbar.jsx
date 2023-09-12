import React, { useState } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { BsFillBackspaceFill } from "react-icons/bs";
import { fetchSearchedBooks } from "../../redux/book/action";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
const Navbar = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
    dispatch(fetchSearchedBooks(e.target.value));
  };
  const handleSearchClick = () => {
    dispatch(fetchSearchedBooks(search));
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
          <Link to="/">
            {" "}
            <p className="text-2xl cursor-pointer font-semibold p-1">Home</p>
          </Link>
          <Link to="/bookshelf">
            {" "}
            <p className="text-2xl cursor-pointer font-semibold p-1">
              BookShelf
            </p>
          </Link>
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
          <FaMagnifyingGlass
            onClick={handleSearchClick}
            className="text-2xl cursor-pointer m-1"
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
