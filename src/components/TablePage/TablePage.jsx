import React from 'react';
import styles from './TablePage.module.css';
import { useState, useEffect } from 'react';
import data from '../../Data/Data.json';
import Table from '../Table/Table';



function TablePage() {
    const [words, setWords] = useState([]);

    useEffect(() => {
        setWords(data)
    }, [])

    function editWords(id, english, theme, slovak) {
        const copyWords = [...words];
        const resultWords = copyWords.map(item => {
            if (item.id === id) {
                item.theme = theme
                item.english = english
                item.slovak = slovak
                return item
            }
            return item
        })
        setWords(resultWords)
    }

    if (!words) {
        return <h1>Wait...</h1>
    }

    return (
        <div className={styles.container}>

            <div className={styles.row}>
                <div className={styles.title}>Theme</div>
                <div className={styles.title}>English</div>
                <div className={styles.title}>Slovak</div>
            </div>

            {
                words.map((item) =>
                    <Table key={item.id} items={item} editWords={editWords}></Table>)
            }
            
        </div>

    );
}

export default TablePage;

