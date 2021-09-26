import { CREATE_BOOK, REMOVE_BOOK } from '../actions';

const initialState = [
  {
    id: Math.floor(Math.random() * 1111).toString(),
    title: 'The Savior’s Champion',
    category: 'Fantasy',
  },
  {
    id: (Math.floor(Math.random() * 1111)).toString(),
    title: 'The Hobbit',
    category: 'Adventure',
  },
  {
    id: (Math.floor(Math.random() * 1111)).toString(),
    title: 'Romeo and Juliet',
    category: 'Classic',
  },
];

const books = (state = initialState, action) => {
  const { type, book } = action;

  switch (type) {
    case CREATE_BOOK:
      return [...state, book];

    case REMOVE_BOOK:
      return state.filter((Book) => Book.id !== book);
    default:
      return state;
  }
};

export default books;
