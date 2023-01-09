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
                    <li><a href="/Main">main</a></li>
                    <li><a href="/Table">table</a></li>
                    <li><a href="/Exersize">words</a></li>
                </ul>
            </nav>
        </div>      
      </header>    
          
      
    );
  }

export default Header;
