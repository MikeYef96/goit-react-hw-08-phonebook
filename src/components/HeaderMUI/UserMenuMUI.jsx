import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';
import Button from '@material-ui/core/Button';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'baseline',
    color: '#6f7ff7',
  },
  name: {
    fontWeight: 700,
    fontSize: 18,
    marginRight: 12,
  },
  button: {
    color: '#6f7ff7',
    fontWeight: 700,
    fontSize: 18,
    textTransform: 'capitalize',
  },
};

export default function UserMenuMUI() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const logOutHandler = () => dispatch(authOperations.logOut());

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}</span>

      <Button
        type="button"
        style={styles.button}
        endIcon={<PowerSettingsNewIcon fontSize="small" />}
        onClick={logOutHandler}
      >
        <span>Sign out</span>
      </Button>
    </div>
  );
}
