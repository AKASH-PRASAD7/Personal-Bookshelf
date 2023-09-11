import {
  FETCH_BOOKS,
  FETCH_SEARCHED_BOOKS,
  ADD_TO_BOOKSHELF,
  REMOVE_FROM_BOOKSHELF,
  ERROR,
  LOADING,
} from "./type";
import axios from "axios";

export const fetchBooks = () => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    let Bookdata = await axios.get(
      "https://openlibrary.org/search.json?q=harry+potter&limit=10&page=1"
    );
    Bookdata = Bookdata.data?.docs;
    return dispatch({
      type: FETCH_BOOKS,
      payload: Bookdata,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};

export const fetchSearchedBooks = (query) => async (dispatch) => {
  try {
    dispatch({
      type: LOADING,
      payload: true,
    });
    let Bookdata = await axios.get(
      `https://openlibrary.org/search.json?q=${query}&limit=10&page=1`
    );
    Bookdata = Bookdata.data?.docs;
    return dispatch({
      type: FETCH_SEARCHED_BOOKS,
      payload: Bookdata,
    });
  } catch (error) {
    return dispatch({
      type: ERROR,
      payload: error.message,
    });
  }
};
