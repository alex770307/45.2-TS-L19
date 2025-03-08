import { useEffect, useState } from "react";
// import Loader from "../loader/Loader";
import './fetchFox.css';
import MyButton from "../myButton/MyButton";
import Loader from "../loader/Loader";

interface IFoxData {
  image: string;
  link: string;
}

export default function FetchFox() {
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


  // const printClick = () => console.log('click')

  // printClick()

  return (
    <div>
      {isLoading ? <Loader /> : (
        <>
          <h2>Fetch fox 🦊</h2>
          <div className="fox-wrapper">
            <img src={imgFox} alt="" />
          </div>
          <MyButton func={getFox} text="one more fox please" />

        </>
      )}



    </div>
  );
}


