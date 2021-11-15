import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from './views/Login'
import ReportPage from './views/ReportPage'
import RegistrationPage from './views/RegistrationPage'


function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() => {
        return sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/" />
        );
      }}
    />
  );
}

function PublicRoute({ children, ...rest }) {
  if (!sessionStorage.getItem("token")) {
    localStorage.removeItem("user");
  }
  return (
    <Route
      {...rest}
      render={() => {
        return !sessionStorage.getItem("token") ? (
          children
        ) : (
          <Redirect to="/stock" />
        );
      }}
    />
  );
}
function App() {

  return (
    <Router>
      <Switch>
        {/* <PrivateRoute exact path="/users" >
          <UsersPage />
        </PrivateRoute>
*/}
        <PublicRoute exact path="/">
          <Login />
        </PublicRoute>

        <PrivateRoute exact path="/stock">
          <ReportPage />
        </PrivateRoute>
        <PrivateRoute exact path="/employee-register">
          <RegistrationPage />
        </PrivateRoute>
      </Switch>
    </Router>
  );
}

export default App;
