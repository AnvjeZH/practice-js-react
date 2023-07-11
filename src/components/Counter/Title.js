import React from 'react';
import css from './Counter.module.css';

const Title = ({text}) => <h1 className={css.counter_title}>{text}</h1>;

export default Title;