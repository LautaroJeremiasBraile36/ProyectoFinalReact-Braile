/* Context */
import GetDocsDBContext from "./GetDocsDBContext";
/* Hooks */
import { useState, useEffect } from "react";
/* DataBase */
import { getFirestore, getDocs, collection } from "firebase/firestore";
import { app } from "../firebase/config";

function GetDocsDBProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const db = getFirestore(app);
    const productsRef = collection(db, "products");

    const fetchItems = async () => {
      try {
        setLoading(true);
        setError(null);
        const querySnap = await getDocs(productsRef);
        const products = querySnap.docs.map((doc) => doc.data());
        setProducts(products);
      } catch (error) {
        setError(error);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  const value = { products, loading, error };
  return (
    <GetDocsDBContext.Provider value={value}>
      {children}
    </GetDocsDBContext.Provider>
  );
}

export default GetDocsDBProvider;
