import React from 'react';
import styles from './Notfound.module.css';
import { NavLink } from "react-router-dom";


function Notfound() {
    return (


<div className={styles.colorlib}>
    <div className={styles.colorlib_notfound}>
        <div className={styles.colorlib_notfound-404}>
            <h1 className={styles.four}>4<span className={styles.emoji}></span>4</h1>
        </div>
        <h2>OOPS! PAGE NOT BE FOUND</h2>
        <p>Sorry, but the page you are looking for does not exist</p>
        <button><NavLink to="/Main">Back to the home</NavLink></button>
    </div>
    
</div>
    )
    }
export default  Notfound;
