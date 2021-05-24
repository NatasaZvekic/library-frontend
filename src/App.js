import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Galery from './components/Galery/Galery'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Logout from './components/Logout.js/Logout';
import BooksContainer from './components/Books/BooksContainer';
import LoginContainer from './components/LogIn/LoginContainer';
import GenresContainer from './components/Genres/GenresContainer'
import jwtDecode from 'jwt-decode';
import AuthorContainer from './components/Authors/AuthorContainer';
import DelivererContainer from './components/Deliverers/DelivererContainer';
import EmployeeContainer from './components/Employees/EmployeeContainer';
import SupplierContainer from './components/Suppliers/SupplierContainer';
import UserContainer from './components/User/UserContainer';
import RentalContainer from './components/Rentals/RentalContainer';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/galery" exact component={Galery} />
        <Route path="/about" exact component={AboutUs} />
        {/* {localStorage.getItem("jwtToken") === null ? : <Redirect to="/home"/> } */}
        <Route path="/login" exact component={localStorage.getItem("jwtToken") === null ? LoginContainer : Home}/>
          {/* {localStorage.getItem("jwtToken") === null ? <Route path="/login" exact component={LoginContainer} />: <Redirect to="/home"/> }  */}
         <Route path="/logout" exact component={localStorage.getItem("jwtToken") !== null ? Logout : Home } />
        <Route path="/books" exact component= {BooksContainer}/> 
        <Route path="/authors" exact component= {localStorage.getItem("jwtToken") !== null ? AuthorContainer : Home }/>
        <Route path="/deliverers" exact component= {localStorage.getItem("jwtToken") !== null ? DelivererContainer : Home }  />
        <Route path="/rentals" exact component= {localStorage.getItem("jwtToken") !== null ? RentalContainer : Home } />
        <Route path="/books?pageNum?bookName" exact component={BooksContainer} />
        <Route path="/genres" exact component={localStorage.getItem("jwtToken") !== null ? GenresContainer : Home } />
        <Route path="/employees" exact component={localStorage.getItem("jwtToken") !== null ? EmployeeContainer : Home } />
        <Route path="/users" exact component={localStorage.getItem("jwtToken") !== null ? UserContainer : Home } />
        <Route path="/suppliers" exact component={localStorage.getItem("jwtToken") !== null ? SupplierContainer : Home } />
      </Switch>
    </Router>
  );
}

export default App;
