import React from 'react';
import PropTypes from 'prop-types';
import styles from '@/styles/calculator.module.css';

function Button(props) {
  const {
    type, text, className, onClick,
  } = props;
  return (
    <button 
      type="button"
      className={`${styles.button} ${className}`} 
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  className: '',
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default Button;
