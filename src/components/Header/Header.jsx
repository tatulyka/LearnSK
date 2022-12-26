import React from "react";
import styles from './Header.module.css';
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
                    <li><a href=""/>main</li>
                    <li><a href=""/>table</li>
                    <li><a href=""/>words</li>
                </ul>
            </nav>
        </div>      
      </header>    
          
      
    );
  }

export default Header;
