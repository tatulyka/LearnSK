import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css';
import { useEffect, useState } from "react";



//import * as classnames from 'classnames';

function Header() {
  
    const [scrollY, setScrollY] = useState(0);
    
    function fixed() {
      setScrollY(window.pageYOffset);
      
    }
    
    useEffect(() => {
      function watchScroll() {
        window.addEventListener("scroll", fixed);
      }
      watchScroll();
      return () => {
        window.removeEventListener("scroll", fixed);
      };
    });
    return (
      <header>
        <div className={styles.main}>
            <div className={styles.container}>
                <h1><NavLink to="/main" className={styles.title}>LEARN SLOVAK</NavLink></h1>
            </div>
        </div>        
        <div className={styles.navigation}>
            <nav>
                <ul>
                    <li><NavLink to="/main" className={styles.activeLink}>main</NavLink></li>
                    <li><NavLink to="/tablePage" className={styles.activeLink}>table</NavLink></li>
                    <li><NavLink to="/game" className={styles.activeLink}>words</NavLink></li>
                </ul>
            </nav>
        </div>      
      </header>    
          
      
    );
  }

export default Header;
