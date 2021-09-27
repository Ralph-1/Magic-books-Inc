import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export { createBook, removeBook };
