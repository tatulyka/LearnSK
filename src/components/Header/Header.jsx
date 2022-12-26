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
        <div className={styles.menu}>
            <div className={styles.navigation}>
                <nav>
                    <ul>
                        <li><a href=""/>Main</li>
                        <li><a href=""/>Table</li>
                        <li><a href=""/>Words</li>
                    </ul>
                </nav>
            </div>
        </div>
      </header>    
          
      
    );
  }

export default Header;
