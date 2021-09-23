import '../App.css';
import Bookslist from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';

function App() {
  return (
    <div className="App">
      <Bookslist />
      <BooksForm />
    </div>
  );
}

export default App;
