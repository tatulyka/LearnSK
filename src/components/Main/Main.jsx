import React from "react";
import styles from './Main.module.css';
import { NavLink } from "react-router-dom";


function Main() {
    return (
      <main>
        <div className={styles.container}>
            <div className={styles.info}>
                <h2>Naučte sa po slovensky</h2>
                <p>Naučte sa po slovensky rýchlo a jednoducho,
                     moderným, praktickým a zábavným spôsobom. 
                     Vyskúšajte naše bezplatné online kurzy, jazykové kvízy, 
                     cvičenia a zábavné hry.</p>
            </div>
        <button className={styles.button}><NavLink to="/game" className={styles.link}>Let's start</NavLink></button>    
        </div>
      </main>    
          
      
    );
  }

  export default Main; 