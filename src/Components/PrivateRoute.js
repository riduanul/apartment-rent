import React from "react";
import { useAuth } from "../Context/AuthContext";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth();

  return currentUser ? (
    <Route {...rest}> {children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
