import React, { useState } from "react";
import styles from "./Exercise.module.css";
import Card from '../card/Card.jsx';
import data from '../../Data/Data.json';
import Button from '../button/Button';
import styleBtn from '../button/Button.module.css';




function Exercise() {
const [count, setCount] = useState(1);

const next = () => {
 if (count !== data.length) {
  setCount(count + 1)
 } else if (count === data.length) {
      setCount(1)
  }
  }

     const previous = () => {
       if (count !== 1) {
           setCount(count - 1)
        } else if (count === 1) {
           setCount (data.length);
       }
   }


   const cards = data.map((item) => {
        return (
             <Card
                key={item.id}
                id={item.id}
                {...item}
           />
        )
    })
    return (
         <div className={styles.container}>
            <div className={styles.MainInfo}>
            <Button onButtonClick={previous} class={styleBtn.btnImg} text={<img className={styleBtn.prevArrow} src="/assets/left.png" alt="left" />} />
                           {cards[count - 1]}
                          
            <Button onButtonClick={next} class={styleBtn.btnImg} text={<img className={styleBtn.nextArrow} src="/assets/right.png" alt="right" />} />
           </div>
           <div className={styles.CountCards}>
               <span className={styles.NowCount}>{count}</span>/{cards.length}
            </div>
        </div>
    );
 }

export default Exercise;

