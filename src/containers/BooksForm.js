import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { categories } from '../categories/categories';
import { createBook } from '../actions/index';

function BooksForm({ createBook }) {
  const [values, setValues] = useState({
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
      id: Math.floor(Math.random() * 11).toString(),
      title,
      category,
    });

    setValues({
      title: '',
      cartegory: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <span>Name: </span>
          <br />
          <input type="text" name="title" id="title" placeholder="enter book name" value={values.title} onChange="handleChange" />
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
        <button type="submit" onSubmit={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, { createBook })(BooksForm);
