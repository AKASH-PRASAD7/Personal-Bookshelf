import React from "react";
import { FaPlus } from "react-icons/fa6";
import "../../App.css";
const Bookcard = ({ title, author, edition }) => {
  return (
    <>
      <section className="text-white shadow-2xl shadow-slate-700/50 relative w-64 h-80 rounded-xl">
        <div className="w-full h-full">
          <img
            src="https://covers.openlibrary.org/b/id/240727-L.jpg"
            alt="book"
            className="w-full h-full z-1 rounded-xl"
          />
        </div>
        <div className="absolute bottom-0 opacity bg-gray-900 w-full z-10 rounded-b-xl p-2">
          <p className="text-center">Title: {title}</p>
          <p className="text-center">Edition: {edition}</p>
          <p className="text-center">Author: {author}</p>
          <button className="bg-cyan-500 flex items-center m-2 justify-center gap-1 hover:bg-cyan-700 mx-16 h-8 w-28 font-bold rounded-xl">
            <FaPlus /> Bookshelf
          </button>
        </div>
      </section>
    </>
  );
};

export default Bookcard;
