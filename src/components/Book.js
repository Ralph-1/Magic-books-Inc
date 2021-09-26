import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  const { id, title, category } = book;

  reuturn (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  )
}

Book.defaultProps = {
  book: {},
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
};
