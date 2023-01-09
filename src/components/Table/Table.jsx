import React from 'react';
import styles from './Table.module.css'


function Table() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.add}>
                <input className={styles.addword} type="text" placeholder="new word" />.
                <button className={styles.addbutton}>add</button>
            </div>
            <div className={styles.container}>

                <div className={styles.headers}>
                    <div className={styles.header}>Theme</div>
                    <div className={styles.header}>English</div>
                    <div className={styles.header}>Slovak</div>
                </div>
                <div className={styles.row}>
                    <input className={styles.themeword} />
                    <input className={styles.englishword} />
                    <input className={styles.slovakword} />
                    <div className={styles.buttons}>
                        <button className={styles.edit}><img src="/public/assets/edit.png"></img></button>
                    </div>
                </div>
            </div>
        </div>


    );
}





export default Table;
