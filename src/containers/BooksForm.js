import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History',
    'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [values, setValues] = useState({
    id: '',
    title: '',
    category: 'Action',
  });

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, category } = values;

    createBook({
      id: Math.floor(Math.random() * 1111).toString(),
      title,
      category,
    });

    setValues({
      id: '',
      title: '',
      cartegory: Action,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name: </span>
          <br />
          <input type="text" name="title" id="title" placeholder="enter book name" value={values.title} onChange={handleChange} />
        </div>
        <div>
          <span>Category: </span>
          <br />
          <select name="category" id="category" value={values.category} onChange={handleChange}>
            {categories.map((category) => (
              <option key={`${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
