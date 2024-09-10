import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";

const Users = () => {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const [newUser, setNewUser] = useState({
    name: "",
    age: 0,
  });

  const handleChangeInput = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const showValueUser = (e) => {
    e.preventDefault();
    if (newUser.name === "" || newUser.age === 0) {
      setMessage("Debes ingresar ambos datos");
      setShowMessage(true);
      return;
    }
    console.log(newUser);
    setNewUser({
      name: "",
      age: 0,
    });
    setMessage("");
    setShowMessage(false);
  };

  return (
    <div>
      <Navbar />
      {!showMessage ? "" : <p>{message}</p>}
      <form>
        <label>
          nombre
          <input
            placeholder="nombre"
            type="text"
            name={"name"}
            value={newUser.name}
            onChange={handleChangeInput}
          />
        </label>
        <label>
          edad
          <input
            type="number"
            name={"age"}
            value={newUser.age}
            onChange={handleChangeInput}
          />
        </label>
        <button onClick={showValueUser}>Crear usuario</button>
      </form>
    </div>
  );
};

export { Users };
