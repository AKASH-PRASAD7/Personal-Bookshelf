import React from "react";

const Bookcard = () => {
  return (
    <>
      <section className="text-white relative w-64 h-80 rounded-xl">
        <div className="w-full h-full">
          <img
            src="https://covers.openlibrary.org/b/id/240727-L.jpg"
            alt="book"
            className="w-full h-full z-1 rounded-xl"
          />
        </div>
        <div className="absolute bottom-0 opacity-75  bg-gray-900 w-full z-10 rounded-b-xl p-2">
          <p className="text-center">title</p>
          <p className="text-center">edition count</p>
          <p className="text-center">author</p>
          <button className="bg-cyan-500 hover:bg-cyan-700 mx-16 h-8 w-28 font-bold rounded-xl">
            Add To shelf
          </button>
        </div>
      </section>
    </>
  );
};

export default Bookcard;
