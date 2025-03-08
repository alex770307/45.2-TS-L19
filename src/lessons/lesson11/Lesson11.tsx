import { useEffect, useState } from 'react';
import styles from './lesson11.module.css'
import Loader from '../../components/loader/Loader';
import MyButton from '../../components/myButton/MyButton';

interface CatFact {
    fact: string;
    length: number;
    image?: string; 
}

export default function Lesson11(): JSX.Element {
    const [facts, setFacts] = useState<CatFact[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const fetchCatFact = async () => {
        setLoading(true);
        const response = await fetch('https://catfact.ninja/fact');
        const factData = await response.json();
 
        const imageUrl = await fetchCatImage(); 
 
        setFacts((prevFacts) => [...prevFacts, { ...factData, image: imageUrl }]);
        setLoading(false);
    };

    useEffect(() => {
        fetchCatFact();
    }, []);

    const handleGetMoreInfo = () => {
        fetchCatFact();
    };

    const handleDeleteAllData = () => {
        setFacts([]);
    };

    const fetchCatImage = async (): Promise<string | undefined> => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=false&order=RANDOM&page=0&limit=1');
        const data = await response.json();
        return data[0]?.url; 
    };

    return (
        <div className={styles.container}>
           {loading && <Loader />}
           <div className={styles.factContainer} style={{ maxHeight: '700px', overflowY: 'auto' }}>
               {facts.map((fact, index) => (
                   <div key={index} className={styles.fact}>
                       <p>{fact.fact}</p>
                       {fact.image && <img src={fact.image} alt="Cat" className={styles.catImage} />}
                   </div>
               ))}
           </div>
           <MyButton func={handleGetMoreInfo} text='GET MORE INFO'/>
           {facts.length > 0 && <MyButton func={handleDeleteAllData} text='DELETE ALL DATA'/>}
          
       </div>

    );
};
