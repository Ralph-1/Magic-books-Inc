import '../App.css';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './NavBar';

const App = () => (
  <div className="App">
    <Navbar />
    <BooksForm />
    <BooksList />
  </div>
);

export default App;
