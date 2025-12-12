/* Components */
import Loader from "../components/Js/Loader";

/* Hooks */
import { useNavigate, Link } from "react-router-dom";
import { useDocs } from "../components/Hooks/useDocs";

/* Styles */
import styles from "../components/Css/ItemListContainer.module.css";
import stylesButton from "../components/Css/Item.module.css";

const GetDocsDB = () => {
  const { products, loading, error } = useDocs();

  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Productos </h2>
        {loading && <Loader />}
        {error && <p>Error: {error}</p>}
        <button className={stylesButton.backBtn} onClick={() => navigate(-1)}>
          Volver / Back
        </button>
        <div className={styles.grid}>
          {products.map((prod) => (
            <Link
              to={`/products/${prod.id}`}
              key={prod.id}
              className={styles.productCard}
            >
              <div className={styles.productImage}>
                <img src={prod.image} alt={prod.title} />
              </div>

              <div className={styles.productInfo}>
                <h3 className={styles.productTitle}>{prod.title}</h3>
                <p className={styles.productDescription}>
                  {prod.description.slice(0, 80)}...
                </p>
                <span className={styles.productPrice}>${prod.price}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default GetDocsDB;
