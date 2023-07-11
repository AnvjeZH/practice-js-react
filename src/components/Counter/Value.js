import React from 'react';
import css from './Counter.module.css';

const Value = ({onValue}) => (
    <span className={css.counter_value}>{onValue}</span>
)

export default Value