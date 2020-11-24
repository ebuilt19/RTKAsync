import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {

  incrementByAmount,
  incrementAsync,
//   selectCount,
  selectObjUser,
  myAsync,
  myObjAsync,
} from './getUserObjSlice';

import styles from '../counter/Counter.module.css';

export function GetUserObj() {
//   const count = useSelector(selectCount);
  const objUser = useSelector(selectObjUser)
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
        //   onClick={() => dispatch(increment())}
        >
          +
        </button>
        {/* <span className={styles.value}>{count}</span> */}
        
        <span className={styles.value}>{objUser}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
        //   onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
          Add Async
        </button>

        <button
          className={styles.asyncButton}
          onClick={() => dispatch(myAsync(incrementAmount))}
        >
          myAsync
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(myObjAsync(incrementAmount))}
        >
          myAsyncSetindObj
        </button>
      </div>
    </div>
  );
}
