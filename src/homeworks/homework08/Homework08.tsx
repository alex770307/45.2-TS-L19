import { useEffect, useState } from "react";
import styles from './homework08.module.css'
import MyButton from "../../components/myButton/MyButton";
import Loader from "../../components/loader/Loader";

interface IFoxData {
  image: string;
  link: string;
}

export default function Homework08() {
  const [imgFox, setImgFox] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getFox = async (): Promise<void> => {
    // ! включаем loader
    setIsLoading(true);
    const res = await fetch('https://randomfox.ca/floof/');
    const data: IFoxData = await res.json();
    setImgFox(data.image);
    // ! выключаем loader
    setIsLoading(false);
  };

  useEffect(() => {
    getFox();
  }, []);

  return (
    <div className={styles.container}>
      <h4>Homework 08</h4>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h2>Fetch fox 🦊</h2>
          <div className={styles.foxWrapper}>
            <img src={imgFox} alt="Fox" />
          </div>
          <MyButton func={getFox} text="one more fox please"  />
        </>
      )}
    </div>
  );
}


