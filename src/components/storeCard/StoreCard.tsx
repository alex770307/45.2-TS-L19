import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import MyButton from "../myButton/MyButton";
import styles from "./storeCard.module.css";

interface IStoreCardProps {
  id: number;
  title: string;
  price: number;
  images: string[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export default function StoreCard({
  id,
  title,
  price,
  images,
  addToFavorites,
  removeFromFavorites,
  isFavorite,
}: IStoreCardProps): JSX.Element {
  const { addToCart } = useCart();

  const handleFavoriteClick = () => {
    if (isFavorite(id)) {
      removeFromFavorites(id);
    } else {
      addToFavorites(id);
    }
  };
  return (
    <div className={styles.storeCard}>
      <h4>{title.length < 30 ? title : title.slice(0, 30) + "..."}</h4>
      <p>Price {price}€</p>
      <div>
        <img src={images[0]} alt={title} />
      </div>
      <section>
        <Link to={String(id)}>
          <MyButton text="to product" />
        </Link>
        <MyButton
          func={() => addToCart({ id, title, price, quantity: 1 })}
          text="add to cart"
          variant="danger"
        />
        <span onClick={handleFavoriteClick} className={styles.span}>
          {isFavorite(id) ? "❤️" : "🤍"}
        </span>
      </section>
    </div>
  );
}
