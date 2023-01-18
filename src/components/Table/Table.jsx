import React from 'react';
import styles from './../TablePage/TablePage.module.css';
import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';
import styleButton from '../Button/Button.module.css';

function Table({ items, editWords }) {
    const { id, english, theme, slovak } = items;
    const [isEdit, setIsEdit] = useState(false);

    const returnState = () => setIsEdit(!isEdit);

    const [valueWord, setValueWord] = useState('');
    const [valueTheme, setValueTheme] = useState('');
    const [valueEnglish, setValueTranslate] = useState('');


    useEffect(() => {
        setValueWord(english)
        setValueTheme(theme)
        setValueTranslate(slovak)
    }, [english, theme, slovak])

    function handleClickWord(e) {
        setValueWord(e.target.value)
    }
    function handleClickTheme(e) {
        setValueTheme(e.target.value)
    }
    function handleClickTranslate(e) {
        setValueTranslate(e.target.value)
    }

    function saveWords() {
        returnState();
        editWords(id, valueWord, valueTheme, valueEnglish);

    }
    return (

        <div className={styles.row}>
            <div className={styles.row__word}> {isEdit ? <Input value={valueTheme} function={handleClickTheme} /> : theme} </div>
            <div className={styles.row__word}> {isEdit ? <Input value={valueWord} function={handleClickWord} /> : english } </div>
            <div className={styles.row__word}> {isEdit ? <Input value={valueEnglish} function={handleClickTranslate} /> : slovak} </div>
            <div className={styles.buttons}>
                {isEdit ? <Button class={styleButton.btn} onButtonClick={saveWords} text='Save' /> : <Button class={styleButton.btn} onButtonClick={returnState} text='Edit' />}
                {isEdit ? <Button class={styleButton.btn} onButtonClick={returnState} text='Cancel' /> : <Button class={styleButton.btn} onButtonClick="" text='X' />}

               
            </div>


        </div>
    );
}

export default Table;
