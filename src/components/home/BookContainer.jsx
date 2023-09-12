import React, { useEffect } from "react";
import Bookcard from "./Bookcard";
import Loader from "../common/Loading";
import { fetchBooks } from "../../redux/book/action";
import { useSelector, useDispatch } from "react-redux";

const BookContainer = () => {
  const { loading, error, books, searchBooks } = useSelector(
    (state) => state.books
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section
        className={`flex gap-8 m-4 mt-8 ${
          loading ? "h-screen" : ""
        } justify-around flex-wrap`}
      >
        {error && (
          <p className="bg-gray-700 text-red-500 font-semibold text-center ">
            Some Error occured: {error}
          </p>
        )}
        {loading ? (
          <Loader />
        ) : searchBooks.length > 0 ? (
          searchBooks.map((each, index) => {
            return (
              <Bookcard
                key={each.key}
                title={each.title}
                author={each.author_name}
                edition={each.edition_count}
                id={`${each.key}${index}`}
              />
            );
          })
        ) : (
          books.map((each, index) => {
            return (
              <Bookcard
                key={each.key}
                title={each.title}
                author={each.author_name}
                edition={each.edition_count}
                id={`${each.key}${index}`}
              />
            );
          })
        )}
      </section>
    </>
  );
};

export default BookContainer;
