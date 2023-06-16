// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useState } from 'react';
import Button from '@/components/Button';
import Display from '@/components/Display';
import calculate from '@/components/logic/calculate';
import styles from '@/styles/calculator.module.css';

function Calculator() {
  const [calculation, setCalculation] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const [display, setDisplay] = useState('0');

  const handleClick = (buttonName) => {
    const result = calculate(calculation, buttonName);
    setCalculation(result);
    setDisplay(result.next || result.total || '0');
  };

  return (
    <div className={styles.calculator}>
      <div className={`${styles.row} ${styles['display-container']}`}>
        <Display result={display} />
      </div>
      <div className={styles.row}>
        <Button
          type="reset"
          text="AC"
          onClick={() => handleClick('AC')}
        />
        <Button
          type="plus-minus"
          text="+/-"
          onClick={() => handleClick('+/-')}
        />
        <Button
          type="operator"
          text="%"
          onClick={() => handleClick('%')}
        />
        <Button
          type="operator"
          text="÷"
          className={styles.yellow}
          onClick={() => handleClick('÷')}
        />
      </div>
      <div className={styles.row}>
        <Button
          type="number"
          text="7"
          onClick={() => handleClick('7')}
        />
        <Button
          type="number"
          text="8"
          onClick={() => handleClick('8')}
        />
        <Button
          type="number"
          text="9"
          onClick={() => handleClick('9')}
        />
        <Button
          type="operator"
          text="x"
          className={styles.yellow}
          onClick={() => handleClick('x')}
        />
      </div>
      <div className={styles.row}>
        <Button
          type="number"
          text="4"
          onClick={() => handleClick('4')}
        />
        <Button
          type="number"
          text="5"
          onClick={() => handleClick('5')}
        />
        <Button
          type="number"
          text="6"
          onClick={() => handleClick('6')}
        />
        <Button
          type="operator"
          text="-"
          className={styles.yellow}
          onClick={() => handleClick('-')}
        />
      </div>
      <div className={styles.row}>
        <Button
          type="number"
          text="1"
          onClick={() => handleClick('1')}
        />
        <Button
          type="number"
          text="2"
          onClick={() => handleClick('2')}
        />
        <Button
          type="number"
          text="3"
          onClick={() => handleClick('3')}
        />
        <Button
          type="operator"
          text="+"
          className={styles.yellow}
          onClick={() => handleClick('+')}
        />
      </div>
      <div className={styles.row}>
        <Button
          type="number"
          text="0"
          className={styles.wide}
          onClick={() => handleClick('0')}
        />
        <Button
          type="number"
          text="."
          onClick={() => handleClick('.')}
        />
        <Button
          type="operator"
          text="="
          className={styles.yellow}
          onClick={() => handleClick('=')}
        />
      </div>
    </div>
  );
}

export default Calculator;
