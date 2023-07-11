import React from 'react';
import css from './Counter.module.css';

export default function Controls({onIncrement, onDecrement }) {
    return (
        <div className={css.counter_controls}>
        <button className={css.counter_btn} type="button" onClick={onIncrement}>
          Increment by 1
        </button>
        <button className={css.counter_btn} type="button" onClick={onDecrement}>
          Decrement by 1
        </button>
      </div>
    )

}
