import { Link, useParams } from "react-router-dom";
import styles from "./storePage.module.css";
import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import { IStoreProps } from "../store/Store";

const initial: IStoreProps = {
  id: 0,
  title: "",
  description: "",
  category: "",
  price: 0,
  discountPercentage: 0,
  rating: 0,
  stock: 0,
  tags: [],
  brand: "",
  sku: "",
  weight: 0,
  dimensions: {
    width: 0,
    height: 0,
    depth: 0,
  },
  warrantyInformation: "",
  shippingInformation: "",
  availabilityStatus: "",
  reviews: [
    {
      rating: 0,
      comment: "",
      date: "",
      reviewerName: "",
      reviewerEmail: "",
    },
    {
      rating: 0,
      comment: "",
      date: "",
      reviewerName: "",
      reviewerEmail: "",
    },
    {
      rating: 0,
      comment: "",
      date: "",
      reviewerName: "",
      reviewerEmail: "",
    },
  ],
  returnPolicy: "",
  minimumOrderQuantity: 0,
  meta: {
    createdAt: "",
    updatedAt: "",
    barcode: "",
    qrCode: "",
  },
  images: [],
  thumbnail: "",
};
export default function StorePage(): JSX.Element {
  const { id } = useParams();
  const [product, setProduct] = useState<IStoreProps>(initial);
  const [productInfo, setProductInfo] = useState<IStoreProps | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleToggleProductInfo = () => {
    if (isInfoVisible) {
      setProductInfo(null);
    } else {
      setProductInfo(product);
    }
    setIsInfoVisible(!isInfoVisible);
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{product.title}</h2>
      <p className={styles.description}>{product.description}</p>
      {/* <img className={styles.image} src={product.images[0]} alt={product.title} /> */}
      {product.images.map((image, index) => (
        <img
          className={styles.image}
          key={index}
          src={image}
          alt={product.title}
        />
      ))}
      <div>
        <MyButton
          variant="primary"
          text={isInfoVisible ? "Hide Product Info" : "Show Product Info"}
          func={handleToggleProductInfo}
        />
      </div>

      {productInfo && (
        <div className={styles.productInfo}>
          <h3>Product Information</h3>

          <p>
            <strong>Category:</strong> {productInfo.category}
          </p>
          <p>
            <strong>Price:</strong> ${productInfo.price}
          </p>
          <p>
            <strong>Rating:</strong> {productInfo.rating} ⭐
          </p>
          <p>
            <strong>Stock:</strong> {productInfo.stock} units
          </p>
          <p>
            <strong>Brand:</strong> {productInfo.brand}
          </p>
          <p>
            <strong>Availability Status:</strong>{" "}
            {productInfo.availabilityStatus}
          </p>
          <p>
            <strong> Shipping Information:</strong>{" "}
            {productInfo.shippingInformation}
          </p>
          <p>
            <strong>Warranty Information:</strong>{" "}
            {productInfo.warrantyInformation}
          </p>
        </div>
      )}
      <div>
        <Link to={"/homework-17"}>
          <MyButton variant="danger" text="back to products" />
        </Link>
      </div>
    </div>
  );
}
