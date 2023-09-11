import React from "react";
import Bookcard from "./Bookcard";

const BookContainer = () => {
  return (
    <>
      <section className="flex gap-8 m-4 mt-8  justify-around flex-wrap">
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
        <Bookcard />
      </section>
    </>
  );
};

export default BookContainer;
