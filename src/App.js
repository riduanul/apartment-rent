import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ApartmentDetails from "./Components/ApartmentDetails/ApartmentDetails/ApartmentDetails";
import AddRentHouse from "./Components/Booking/AddRentHouse/AddRentHouse";
import BookingList from "./Components/Booking/BookingList/BookingList";
import MyRent from "./Components/Booking/MyRent/MyRent";
import Sidebar from "./Components/Booking/Sidebar/Sidebar";
import Home from "./Components/Home/Home/Home";
import CreateAccount from "./Components/Login/CreateAccount/CreateAccount";
import Login from "./Components/Login/Login.js";
import AuthProvider from "./Context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute path="/details/:title">
              <ApartmentDetails />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="sidebar">
              <Sidebar />
            </Route>
            <PrivateRoute path="/bookinglist">
              <BookingList />
            </PrivateRoute>
            <Route path="/myrent">
              <MyRent />
            </Route>
            <Route path="/addrent">
              <AddRentHouse />
            </Route>
            <Route axect path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
