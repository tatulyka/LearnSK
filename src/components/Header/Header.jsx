import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import Main from "../Main/Main";
import TablePage from "../TablePage/TablePage";


//import * as classnames from 'classnames';

function Header() {
    return (
      <header>
        <div className={styles.main}>
            <div className={styles.container}>
                <h1 className={styles.title}>LEARN SLOVAK </h1>
            </div>
        </div>        
        <div className={styles.navigation}>
            <nav>
                <ul>
                    <li><NavLink to="/Main" className={styles.activeLink}>main</NavLink></li>
                    <li><NavLink to="/TablePage" className={styles.activeLink}>table</NavLink></li>
                    <li><NavLink to="/Exercise" className={styles.activeLink}>words</NavLink></li>
                </ul>
            </nav>
        </div>      
      </header>    
          
      
    );
  }

export default Header;
