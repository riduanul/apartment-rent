import React from "react";
import { useAuth } from "../../Context/AuthContext";
import MyRent from "./MyRent/MyRent";

export default function Booking() {
  const { currentUser } = useAuth();
  const { email } = currentUser;

  return (
    <div>
      <button>for post </button>
      <MyRent />
    </div>
  );
}
