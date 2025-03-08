import { Link } from 'react-router-dom';
import styles from './productCard.module.css'
import MyButton from '../myButton/MyButton';
import { useCart } from '../../context/CartContext';
// ! Nr 1
// interface IProductCardProps {
//     id: number;
//     title: string;
//     price: number;
//     image: string;
// }

// export default function ProductCard({ title, image, id, price}: IProductCardProps): JSX.Element {
//     // ! получаем функцию добавления в корзину из контекста
// const { addToCart } = useCart();
// return (
//   <div className={styles.productCard}>

// <h4>{title.length < 30 ? title : title.slice(0, 30) + '...'}</h4>
//     <p>Price {price}€</p>
//     <div>
//       <img src={image} alt="" />
//     </div>
//     <section>
//       <Link to={String(id)}><MyButton text="to product" /></Link>
//       <MyButton func={() => addToCart({ id, title, price, quantity: 1 })} text="add to cart" variant="danger" />
//     </section>
    
//   </div>
// )
// }


// ! Nr 2
interface IProductCardProps {
    id: number;
    title: string;
    price: number;
    image: string;
    addToFavorites: (id: number) => void; 
    removeFromFavorites: (id: number) => void; 
    isFavorite: (id: number) => boolean; 
}

export default function ProductCard({ title, image, id, price, addToFavorites, removeFromFavorites, isFavorite }: IProductCardProps): JSX.Element {
    const { addToCart } = useCart();

    const handleFavoriteClick = () => {
        if (isFavorite(id)) {
            removeFromFavorites(id);
        } else {
            addToFavorites(id);
        }
    };
  return (
    <div className={styles.productCard}>
  
  <h4>{title.length < 30 ? title : title.slice(0, 30) + '...'}</h4>
      <p>Price {price}€</p>
      <div>
        <img src={image} alt="" />
      </div>
      <section>
        <Link to={String(id)}><MyButton text="to product" /></Link>
        <MyButton func={() => addToCart({ id, title, price, quantity: 1 })} text="add to cart" variant="danger" />
        <span onClick={handleFavoriteClick} className={styles.span} >
          {isFavorite(id) ? '❤️' : '🤍'}
        </span>

      </section>
      
    </div>
  )
}