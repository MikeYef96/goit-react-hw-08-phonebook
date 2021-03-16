import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { contactsSelectors } from 'redux/contacts';
import * as contactsActions from 'redux/contacts';
import InputBase from '@material-ui/core/InputBase';
import PropTypes from 'prop-types';
import FormContainer from '../../lib/FormContainer';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  searchInput: {
    backgroundColor: '#6776e6',
    borderRadius: '15px',
    opacity: '0.9',
    '&:hover': {
      backgroundColor: '#fff',
      borderRadius: '15px',
      boxShadow: '1px 1px 10px 1px rgba(111,127,247, 1)',
    },
    '& .MuiSvgIcon-root': {
      fill: '#6f7ff7',
      marginRight: '8px',
    },
  },
});

const Filter = () => {
  const styles = useStyles();
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const searchContactsHandler = evt =>
    dispatch(contactsActions.changeFilter(evt.target.value));

  return (
    <FormContainer>
      <InputBase
        className={styles.searchInput}
        startAdornment={<SearchIcon fontSize="small" color="secondary" />}
        placeholder="find your contacts"
        type="text"
        value={value}
        onChange={searchContactsHandler}
      />
    </FormContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
