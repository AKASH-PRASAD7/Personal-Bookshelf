import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Emptyshelf from "./Emptyshelf";
import BookCard from "../home/Bookcard";
import { getBookShelf } from "../../redux/book/action";

const BookShelf = () => {
  const dispatch = useDispatch();
  const { bookShelf } = useSelector((state) => state.books);
  useEffect(() => {
    dispatch(getBookShelf());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <section className="text-white">
        <p className="text-6xl font-bold m-8 font-bold">My Books</p>
        <div>
          {bookShelf.length === 0 ? (
            <Emptyshelf />
          ) : (
            <div className="flex justify-around gap-4 flex-warp m-4">
              {bookShelf.map((each, index) => {
                return (
                  <BookCard
                    key={index}
                    title={each.title}
                    author={each.author}
                    edition={each.edition}
                    id={each.id}
                  />
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BookShelf;
