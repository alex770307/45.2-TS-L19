import { useEffect, useState } from "react";
import styles from "./store.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import Cart from "../cart/Cart";
import MyButton from "../myButton/MyButton";
import Loader from "../loader/Loader";
import StoreCard from "../storeCard/StoreCard";
import { useFavorites } from "../../favoritesContext/FavoritesContext";

export interface IStoreProps {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    }
  ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
}

export default function Store(): JSX.Element {
  const [products, setProducts] = useState<IStoreProps[]>([]);
  const [limit, setLimit] = useState<number>(30);
  const [loading, setLoading] = useState<boolean>(true);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const getProducts = async (limit: number) => {
    setLoading(true);
    const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    const data = await res.json();
    setProducts(data.products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts(limit);
  }, [limit]);

  const formik = useFormik({
    initialValues: {
      quantity: 194,
    },
    validationSchema: Yup.object().shape({
      quantity: Yup.number()
        .typeError("Enter the number")
        .min(1, "Minimum value 1")
        .max(194, "Maximum value 194")
        .required("Required field"),
    }),
    onSubmit: (values) => {
      setLimit(values.quantity);
    },
  });
  console.log(products);

  return (
    <>
      <Cart />
      <div className={styles.storeContainer}>
        <h2 className={styles.storeHeader}>Store</h2>
        <form onSubmit={formik.handleSubmit} className={styles.formContainer}>
          <label htmlFor="quantity">Quantity of products:</label>
          <input
            className={styles.inputField}
            id="quantity"
            name="quantity"
            type="number"
            value={formik.values.quantity}
            onChange={formik.handleChange}
          />
          {formik.errors && <p>{formik.errors.quantity}</p>}
          <MyButton type="submit" text="Loading" />
        </form>

        {loading ? (
          <Loader />
        ) : (
          <div className={styles.gridContainer}>
            {products.map((product) => (
              <StoreCard
                key={product.id}
                title={product.title}
                price={product.price}
                images={product.images}
                id={product.id}
                addToFavorites={addToFavorites}
                removeFromFavorites={removeFromFavorites}
                isFavorite={isFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
