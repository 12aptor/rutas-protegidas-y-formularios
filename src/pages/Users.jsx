import { useState } from "react";
import { Navigate } from "react-router-dom";

const Users = () => {
  const [isAuth, setIsAuth] = useState(false);

  if (!isAuth) {
    return <Navigate to="/" />
  }

  return <div>Users</div>;
};

export default Users;
