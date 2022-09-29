import { useState } from "react";
import "../styles.css";

const Home = () => {
  // Estado que contiene nuestras credenciales de usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // Función para ejecutar el evento onSubmit y consumir la API
  const signIn = (e) => {
    e.preventDefault();
    console.log(user);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  // Función controlada, para obtener valores de los input
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <div className="App">
      <form onSubmit={signIn}>
        <h2>Sign In</h2>
        <div className="form_group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleInputChange} />
        </div>
        <div className="form_group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleInputChange} />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Home;
