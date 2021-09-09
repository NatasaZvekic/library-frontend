import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Galery from './components/Galery/Galery'
import Home from './components/Home/Home';
import AboutUs from './components/AboutUs/AboutUs';
import Logout from './components/Logout.js/Logout';
import BooksContainer from './components/Books/BooksContainer';
import LoginContainer from './components/LogIn/LoginContainer';
import GenresContainer from './components/Genres/GenresContainer'
import AuthorContainer from './components/Authors/AuthorContainer';
import DelivererContainer from './components/Deliverers/DelivererContainer';
import EmployeeContainer from './components/Employees/EmployeeContainer';
import SupplierContainer from './components/Suppliers/SupplierContainer';
import UserContainer from './components/User/UserContainer';
import RentalContainer from './components/Rentals/RentalContainer';
import RegisterContainer from './components/Register/RegisterContainer';  
import MyRentalsContainer from './components/MyRentals/MyRentalsContainer';
import MyProfileContainer from './components/MyProfile/MyProfileContainer';
import MyCards   from './components/Books/MyCards';
function App() {
  return ( 
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" exact component={Home} />
        <Route path="/galery" exact component={Galery} />
        <Route path="/register"  exact component={localStorage.getItem("jwtToken") === null ? RegisterContainer : Home }/>
        <Route path="/myrentals" exact component= {localStorage.getItem("role") === "user" ? MyRentalsContainer : Home }/>
        <Route path="/about" exact component={AboutUs} />
        <Route path="/login" exact component={localStorage.getItem("jwtToken") === null ? LoginContainer : Home}/>
         <Route path="/logout" exact component={localStorage.getItem("jwtToken") !== null ? Logout : Home } />
        <Route path="/books" exact component= {BooksContainer}/> 
        <Route path="/authors" exact component= {localStorage.getItem("role") === "admin" ? AuthorContainer : Home }/>
        <Route path="/deliverers" exact component= {localStorage.getItem("role") === "admin" ? DelivererContainer : Home }  />
        <Route path="/rentals" exact component= {localStorage.getItem("role") === "admin" ? RentalContainer : Home } />
        <Route path="/books?pageNum?bookName" exact component={BooksContainer} />
        <Route path="/genres" exact component={localStorage.getItem("role") === "admin" ? GenresContainer : Home } />
        <Route path="/employees" exact component={localStorage.getItem("role") === "admin" ? EmployeeContainer : Home } />
        <Route path="/users" exact component={localStorage.getItem("role") === "admin" ? UserContainer : Home } />
        <Route path="/suppliers" exact component={localStorage.getItem("role") === "admin" ? SupplierContainer : Home } />
        <Route path="/myProfile" exact component={MyProfileContainer} />
        <Route path="/trz" exact component={MyCards} />

      </Switch>
    </Router>
  );
}

export default App;
