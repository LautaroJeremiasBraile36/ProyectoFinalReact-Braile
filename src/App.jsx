import NavBar from "./components/Js/NavBar";
import ItemListContainer from "./components/Js/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import ProductsDetail from "./Pages/ProductsDetail";
import Cart from "./Pages/Cart";
import CheckOut from "./Pages/CheckOut";
import Contact from "./Pages/Contact";
import NotFound404 from "./Pages/NotFound404";
import Us from "./Pages/Us";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda!" />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductsDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkOut" element={<CheckOut />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/us" element={<Us />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </>
  );
}

export default App;
