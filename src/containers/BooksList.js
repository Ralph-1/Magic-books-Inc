import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import * as actions from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, filter }) => {
  const handleRemoveBook = (e, book) => {
    e.preventDefault();
    removeBook(book.id);
  };

  const handleFilterChange = (fil) => {
    filter(fil);
  };

  return (
    <div className="book-list">
      <div className="filter-container">
        <CategoryFilter onSelectHandler={handleFilterChange} />
      </div>
      <div className="book-cards">
        {books.map((book) => (
          <Book book={book} key={book.id} handleRemove={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {
    books, removeBook, catfilter, filter,
  } = state;
  if (catfilter !== 'All' || '') {
    const result = books.filter((book) => book.category === catfilter);
    return { books: result };
  }

  return { books, removeBook, filter };
};

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.oneOfType([PropTypes.array]),
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(BooksList);
