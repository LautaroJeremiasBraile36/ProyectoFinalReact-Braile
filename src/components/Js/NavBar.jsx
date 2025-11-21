import styles from "../Css/NavBar.module.css";

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to={"/home"} className={styles.navlinks}>
        Home
      </NavLink>
      <NavLink to={"/products"} className={styles.navlinks}>
        Products
      </NavLink>
      <NavLink to={"/productDetail"} className={styles.navlinks}>
        Detalle de Producto
      </NavLink>
      <NavLink to={"/us"} className={styles.navlinks}>
        Us
      </NavLink>
      <NavLink to={"/contact"} className={styles.navlinks}>
        Contact
      </NavLink>

      {/*       <Logo />
      <NavLinks />
      <CartWidget /> */}
    </nav>
  );
};

export default NavBar;
