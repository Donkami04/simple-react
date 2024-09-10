import { Navbar } from "../Navbar/Navbar";
import { useState } from "react";

const Products = () => {
  const [dataNewProduct, setDataNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const handleInputChange = (event) => {
    // Esta funcion se utiliza para darle un nuevo valor
    // a las propiedades del objeto dataNewProduct
    // y se actualiza el valor de las propiedades
    // con el valor del input
    setDataNewProduct({
      ...dataNewProduct,
      [event.target.name]: event.target.value,
    });
  };

  const showDataNewProduct = (e) => {
    e.preventDefault();
    console.log(dataNewProduct);
  };

  //   const [toDoCounter, setToDoCounter] = useState(0);

  //   const handleAddToDo = (e) => {
  //     e.preventDefault();
  //     setToDoCounter(toDoCounter + 1);
  //   };

  return (
    <div>
      <Navbar />
      <main>
        <form>
          {/* <button onClick={handleAddToDo}>Agregar</button>
          <p>{toDoCounter}</p> */}
          <label htmlFor="">Nombre</label>
          <input
            type="text"
            placeholder="Nombre"
            name={"name"}
            value={dataNewProduct.name}
            onChange={handleInputChange}
          />

          <label htmlFor="">Precio</label>
          <input
            type="number"
            name={"price"}
            value={dataNewProduct.price}
            onChange={handleInputChange}
          />

          <label htmlFor="">Descripcion</label>
          <input
            type="text"
            name={"description"}
            placeholder="Descripcion"
            value={dataNewProduct.description}
            onChange={handleInputChange}
          />
          <button onClick={showDataNewProduct}>Crear</button>
        </form>
      </main>
    </div>
  );
};

export { Products };
