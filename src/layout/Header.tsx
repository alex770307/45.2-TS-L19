import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';
import { useCart } from '../context/CartContext';
import { getTotalPrice } from '../components/cart/Cart';

export default function Header() {
  const { cart } = useCart();
  return (

    <header className={styles.header}>
      <nav>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="/"
        >
          <h3>home</h3>
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="fellowship"
        >
          fellowship
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="fetch-fox"
        >
          fetch fox
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="products"
        >
          products
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to="cart"
        >
          cart
        </NavLink>
      </nav>

      <span>total: {getTotalPrice(cart)}€</span>
    </header>

  );
}