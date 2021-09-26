import React from 'react';
import categories from '../categories/categories';

export default function BooksForm() {
  return (
    <div>
      <form>
        <div>
          <span>Book Name: </span>
          <br />
          <input type="text" name="title" id="title" placeholder="Book Name..." />
        </div>
        <div>
          <span>Book Category: </span>
          <br />
          <select name="category" id="category">
            {categories.map((category) => (
              <option key={`${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
}
