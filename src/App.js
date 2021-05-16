import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Galery from './components/Galery/Galery'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Logout from './components/Logout.js/Logout';
import Try from './Try';
import BooksContainer from './components/Books/BooksContainer';
import LoginContainer from './components/LogIn/LoginContainer';
import GenresContainer from './components/Genres/GenresContainer'
import jwtDecode from 'jwt-decode';
import AuthorContainer from './components/Authors/AuthorContainer';
import DelivererContainer from './components/Deliverers/DelivererContainer';
import EmployeeContainer from './components/Employees/EmployeeContainer';

function App() {
  

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/galery" exact component={Galery} />
        <Route path="/about" exact component={AboutUs} />
        <Route path="/login" exact component={LoginContainer} />
        <Route path="/logout" exact component={Logout} />
        <Route path="/books" exact component={BooksContainer} />
        <Route path="/authors" exact component={AuthorContainer} />
        <Route path="/deliverers" exact component={DelivererContainer} />
        <Route path="/books?pageNum=1" exact component={BooksContainer} />
        <Route path="/try" exact component={Try} />
        <Route path="/genres" exact component={GenresContainer} />
        <Route path="/employees" exact component={EmployeeContainer} />
      </Switch>
    </Router>
  );
}

export default App;
