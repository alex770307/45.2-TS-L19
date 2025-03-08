import { useState } from "react";
import styles from "./feedback.module.css";
import MyButton from "../myButton/MyButton";

function Feedback() {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const resetResults = () => {
    setLikeCount(0);
    setDislikeCount(0);
  };
  return (
    <>
      <h4>Homework04:</h4>
      <div className={styles.feedback}>
        <MyButton func={handleLike} text={`Like ${likeCount}`} />
        <MyButton func={handleDislike} text={`Dislike ${dislikeCount}`} />
        <MyButton func={resetResults} text={`Reset Results `} />
      
      </div>
    </>
  );
}

export default Feedback;
