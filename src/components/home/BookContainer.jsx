import React, { useEffect, useState } from "react";
import Bookcard from "./Bookcard";
import Loader from "../common/Loading";
import axios from "axios";

const BookContainer = () => {
  const [books, setBooks] = useState(null);
  const fetchBooks = async () => {
    try {
      let Bookdata = await axios(
        "https://openlibrary.org/search.json?q=the+lord+of+the+rings&limit=10&page=1"
      );

      Bookdata = Bookdata.data?.docs;
      setBooks(Bookdata);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchBooks();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section
        className={`flex gap-8 m-4 mt-8 ${
          books ? "" : "h-screen"
        } justify-around flex-wrap`}
      >
        {books ? (
          books.map((each) => {
            return (
              <Bookcard
                key={each.key}
                title={each.title}
                author={each.author_name}
                edition={each.edition_count}
              />
            );
          })
        ) : (
          <Loader />
        )}
      </section>
    </>
  );
};

export default BookContainer;
