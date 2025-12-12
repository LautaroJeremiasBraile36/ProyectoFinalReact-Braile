import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../Css/Item.module.css";
import ItemCount from "./ItemCount";

import Loader from "./Loader";

function Item() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <Loader />;

  return (
    <div className={styles.container}>
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        Volver / Back
      </button>

      <h2 className={styles.titulo}>Detalle del producto</h2>

      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={product.image}
            alt={product.title}
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.description}>{product.description}</p>
          <span className={styles.price}>${product.price}</span>

          <ItemCount Item={product} />
        </div>
      </div>
    </div>
  );
}

export default Item;
