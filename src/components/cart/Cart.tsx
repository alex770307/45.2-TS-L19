import styles from './cart.module.css';

import { ICartItem, useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";

// ! функция подсчета общей суммы в корзине
export const getTotalPrice = (items: ICartItem[]) => {
  return items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

export default function Cart(): JSX.Element {
  // ! получаем данные из контекста корзины
  const { cart, clearCart, removeFromCart } = useCart();

  return (
    <div className={styles.cartContainer}>
      <h2>Cart 🛒</h2>
      <div className={styles.cartList}>
        {cart.map((el) => (
          <div key={el.id}>
            <MyButton
              func={() => removeFromCart(el.id)}
              variant="primary"
              text={"delete"}
            />
            <span>{el.title}</span>
            <span style={{ fontWeight: "bold" }}> quantity: {el.quantity}</span>
          </div>
        ))}
      </div>
      <div>
        {/* используем подсчет и выводим на экран */}
        <h3>Total price: €{getTotalPrice(cart)}</h3>
      </div>
      <div>
        <MyButton func={clearCart} variant="danger" text={"clear cart"} />
      </div>
    </div>
  );
}