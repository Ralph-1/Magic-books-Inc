const CREATE_BOOK = (book) => ({
  type: CREATE_BOOK,
  payLoad: book,
});

const REMOVE_BOOK = (book) => ({
  type: REMOVE_BOOK,
  payLoad: book,
});

export { CREATE_BOOK, REMOVE_BOOK };
