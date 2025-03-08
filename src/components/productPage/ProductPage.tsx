import { Link, useParams } from "react-router-dom";
import styles from './productPage.module.css';
import { useEffect, useState } from "react";
import { IProduct } from '../products/Products';
import MyButton from "../myButton/MyButton";

const initial: IProduct = {
  id: 0,
  title: "",
  price: 0,
  description: "",
  image: "",
  rating: {
    rate: 0,
    count: 0
  }
};

export default function ProductPage(): JSX.Element {
  // через хук useParams() мы получаем доступ к данным из адресной строки
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>(initial);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, []);


  return (
    <div className={styles.container}>
    <h2 className={styles.title}>{product.title}</h2>
    <p className={styles.description}>{product.description}</p>
    <img className={styles.image} src={product.image} alt={product.title} />
    <div className={styles.backButtonContainer}>
      <Link to={'/lesson-14'}>
        <MyButton variant="danger" text="back to products" />
      </Link>
    </div>
  </div>
  );
}