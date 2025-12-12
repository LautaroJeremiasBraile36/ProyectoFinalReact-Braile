import Products from "../../Pages/Products";
import styles from "../Css/ItemListContainer.module.css";
import GreetingMessage from "./GreetingMessage";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className={styles.container}>
      <GreetingMessage text={greeting} />
      <Products />
    </div>
  );
};
export default ItemListContainer;
