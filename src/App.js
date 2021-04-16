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


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/services">
          <Services></Services>
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
      </Switch>
    </Router>
  );
}

export default App;
