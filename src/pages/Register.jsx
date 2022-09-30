import { useState } from "react";
import { authFirebaseWithEmailService } from "../services/firebaseServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  const sendSignUpData = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await authFirebaseWithEmailService(newUser);
      if (userCredentials.user) {
        localStorage.setItem("token", userCredentials.user.accessToken);
        navigate("/users")
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  return (
    <div className="App">
      <form onSubmit={sendSignUpData}>
        <h2>Sign Up</h2>
        <div className="form_group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleInputChange} />
        </div>
        <div className="form_group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <button type="submit">Sign Un</button>
      </form>
    </div>
  );
};

export default Register;
