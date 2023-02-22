import React, { useState } from "react";
import styles from "./Card.module.css";
import styleBtn from '../Button/Button.module.css';



export default function Card(props) {
    const [clicked, setClicked] = useState(props.clicked || false);
    const handleClick = () => {
        setClicked(true)
    }
    return (
        <div className={styles.card} >
            <div className={styles.about}>
                <div className={styles.english}>{props.slovak}</div>
                <div className={styles.picture}><img src = {props.picture} className={styles.img} alt={props.english}/></div>
            </div>
            <div className={styles.button}>
                {
                    clicked
                        ? <p className={styles.slovak}>{props.english}</p>
                        : <button onClick={handleClick} className={styleBtn.btn}>Translate</button>
                }
            </div>
        </div>
    )


} 
