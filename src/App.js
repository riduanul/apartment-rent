import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ApartmentDetails from "./Components/ApartmentDetails/ApartmentDetails/ApartmentDetails";
import AddRentHouse from "./Components/Booking/AddRentHouse/AddRentHouse";
import BookingList from "./Components/Booking/BookingList/BookingList";
import MyRent from "./Components/Booking/MyRent/MyRent";
import Home from "./Components/Home/Home/Home";
import CreateAccount from "./Components/Login/CreateAccount/CreateAccount";
import Login from "./Components/Login/Login.js";
import AuthProvider from "./Context/AuthContext";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/details/:title">
              <ApartmentDetails />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/createAccount">
              <CreateAccount />
            </Route>
            <Route path="/bookinglist">
              <BookingList />
            </Route>
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
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
