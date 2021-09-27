import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 11).toString(),
      title: 'The Savior’s Champion',
      category: 'Fantasy',
    },
    {
      id: (Math.floor(Math.random() * 11)).toString(),
      title: 'The Hobbit',
      category: 'Adventure',
    },
    {
      id: (Math.floor(Math.random() * 11)).toString(),
      title: 'Romeo and Juliet',
      category: 'Classic',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
