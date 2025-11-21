import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <h1>Productos MotherFucker</h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`} className="navLink">
              {prod.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Products;
