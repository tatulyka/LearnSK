import styles from './Input.module.css';
import React from 'react';

function Input(props) {
    return (
        <input className={styles.input} type="text" defaultValue={props.value} onChange={props.function} />
    );
}

export default Input;