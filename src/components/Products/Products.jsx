import { Navbar } from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import { ShopCar } from "../ShopCar/ShopCar";
import axios from "axios";
import "./Products.css";

const Products = () => {
  const [dataNewProduct, setDataNewProduct] = useState({
    name: "",
    price: 0,
    description: "",
  });

  const [apiProducts, setApiProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  async function llamarApi() {
    const response = await axios.get("https://fakestoreapi.com/products");
    const dataProducts = response.data;
    // console.log(dataProducts);
    setApiProducts(dataProducts);
  }

  useEffect(() => {
    try {
      llamarApi();
    } catch (err) {
      console.error(err);
    }
  }, []);

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
  };

  return (
    <>
      <Navbar />
      <div className="products-container">
        <main>
          <div>
            <form className="new-product-form">
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
          </div>
          <section className="products-cards-container">
            {/* {apiProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
              <button
                onClick={() => {
                  setSelectedProducts([...selectedProducts, product]);
                }}
              >
                Agregar al carrito
              </button>
            </div>
          ))} */}
            {apiProducts.map((product) => (
              <div className="product-card" key={product.id}>
                <figure className="image-product-container">
                  <img src={product.image} />
                </figure>
                <h2>{product.title}</h2>
                <p>{product.price}</p>
                <span>{product.description}</span>
                <button
                  onClick={() => {
                    setSelectedProducts([...selectedProducts, product]);
                  }}
                >
                  Agregar al carrito
                </button>
              </div>
            ))}
          </section>
        </main>
        <ShopCar products={selectedProducts} />
      </div>
    </>
  );
};

export { Products };
