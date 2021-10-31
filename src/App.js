import './App.css';
import { BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Services/Services';
import Fotter from './Shared/Fotter/Fotter';
import AboutUs from './Pages/AboutUs/AboutUs';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import NewAccount from './Pages/NewAccount/NewAccount';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/service-details/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
                <Login></Login>
            </Route>
            <Route path="/addservice">
                <AddService></AddService>
            </Route>
            <Route path="/createaccount">
                <NewAccount></NewAccount>
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
        </Switch>
        <Fotter/>
      </Router>
      </AuthProvider>
  );
}

export default App;
