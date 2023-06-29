// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/calculator.module.css';

function Display({ result }) {
  // result = result || "0";
  return (
    <div
      id="display" 
      className={styles.display}>
      {result}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
