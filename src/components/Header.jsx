import styles from "@/styles/Header.module.css";
import PropTypes from "prop-types";

const Header = (props) => {
  return (
    <header className={styles.header}>
       {props.children}
    </header>
  );
};

Header.defaultProps = {
  children: null,
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
