import '../App.css';
import Container from 'react-bootstrap/Container';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Navbar from './NavBar';

const App = () => (
  <div className="App">
    <Navbar />
    <Container>
      <BooksForm />
      <BooksList />
    </Container>
  </div>
);

export default App;
