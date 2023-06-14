import { useRef } from "react";
import { NavLink } from "react-router-dom";
import React from 'react';
import PropTypes from "prop-types";

const links = [
  { path: 'Home', text: 'Home' },
  { path: 'Calc', text: 'Calculator' },
  { path: 'Quote', text: 'Quote' },
];

const Navbar = () => {

  const ref = useRef();

  return (
    <>
      <nav ref={ref} className="navbar">
        <h1 className="menu-icon">Math Magicians</h1>
        <ul className={"menu-nav"}>
          {links.map((link) => {
            return (
              <React.Fragment key={link.text}>
                    <li>
                      <NavLink to={link.path}>
                        {link.text}
                      </NavLink>
                    </li>
              </React.Fragment>
            );
          })}
        </ul>        
      </nav>
    </>
  );
};

Navbar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
};

export default Navbar;