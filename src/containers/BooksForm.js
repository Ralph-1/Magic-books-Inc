import React from 'react';
import { categories } from '../categories/categories';

export default function BooksForm() {
  return (
    <div>
      <form>
        <div>
          <span>Name: </span>
          <br />
          <input type="text" name="title" id="title" placeholder="enter book name" />
        </div>
        <div>
          <span>Category: </span>
          <br />
          <select name="category" id="category">
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
}
