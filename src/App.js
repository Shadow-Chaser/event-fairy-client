import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Services from './components/Home/Services/Services';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import AddReview from './components/Dashboard/AddReview/AddReview';
import ManageServices from './components/Dashboard/ManageServices/ManageServices';
import Checkout from './components/Checkout/Checkout/Checkout';
import Login from './components/Login/Login/Login';
import { createContext, useState } from 'react';
import Navigation from './components/Home/Navigation/Navigation';
import ManageBookings from './components/Dashboard/ManageBookings/ManageBookings';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import UserBookings from './components/Dashboard/UserBookings/UserBookings';
import Bookings from './components/Dashboard/Bookings/Bookings';
export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        {/* <Navigation></Navigation> */}
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        <Route path="/services">
          <Services></Services>
        </Route>
        <Route path="/manageBookings">
            <ManageBookings></ManageBookings>
        </Route>
          <Route path="/userBookings">
            <UserBookings></UserBookings>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>

        <Route path="/dashboard">
            <Dashboard></Dashboard>
        </Route>
        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/addReview">
          <AddReview></AddReview>
        </Route>
        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
          <Route path="/service/:serviceId">
            <Checkout></Checkout>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
