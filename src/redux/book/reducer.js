import {
  FETCH_BOOKS,
  FETCH_SEARCHED_BOOKS,
  ADD_TO_BOOKSHELF,
  REMOVE_FROM_BOOKSHELF,
  ERROR,
  LOADING,
} from "./type";

let initialState = {
  books: [],
  searchBooks: [],
  bookShelf: [],
  error: null,
  loading: false,
};
const bookReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKS:
      return {
        ...state,
        books: payload,
        error: null,
        loading: false,
      };
    case FETCH_SEARCHED_BOOKS:
      return {
        ...state,
        searchBooks: payload,
        error: null,
        loading: false,
      };
    case ADD_TO_BOOKSHELF:
      return {
        ...state,
        bookShelf: payload,
        error: null,
        loading: false,
      };
    case REMOVE_FROM_BOOKSHELF:
      return {
        ...state,
        bookShelf: payload,
        error: null,
        loading: false,
      };
    case ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case LOADING:
      return {
        ...state,
        error: null,
        loading: payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default bookReducer;
