import { useState } from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../services/authServices";

const Users = () => {
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return <div>Users</div>;
};

export default Users;
