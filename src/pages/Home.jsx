import { useState } from "react";

const Home = () => {
  // Estado que contiene nuestras credenciales de usuario
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  // Función para ejecutar el evento onSubmit y consumir la API
  const signIn = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login")
  };
  // Función controlada, para obtener valores de los input
  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value
    })
  }

  return (
    <div className="App">
      <form onSubmit={signIn}>
        <label>
          Email
          <input type="email" name="email" onChange={handleInputChange} />
        </label>
        <label>
          Password
          <input type="password" name="password" onChange={handleInputChange} />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Home;
