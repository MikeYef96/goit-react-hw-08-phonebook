import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 900,
    fontSize: 18,
    color: '#faa346',
  },
  activeLink: {
    color: '#ffffff',
    fontSize: '25px',
  },
};

export default function AuthNavMUI() {
  return (
    <>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Registration
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </>
  );
}
