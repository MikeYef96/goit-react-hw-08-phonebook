import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import FormContainer from '../../lib/FormContainer';
import PropTypes from 'prop-types';

import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {},
  searchInput: {
    opacity: '0.9',
    '&:hover': {
      backgroundColor: '#fff',
      borderRadius: '5px',
      boxShadow: '1px 1px 10px 1px rgba(241,132,98,1)',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  },
});

const Filter = () => {
  const styles = useStyles();
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <FormContainer>
      <InputBase
        autoComplete="off"
        className={styles.searchInput}
        startAdornment={<SearchIcon fontSize="small" color="secondary" />}
        type="text"
        placeholder="Enter contact name"
        value={value}
        onChange={evt =>
          dispatch(contactsActions.changeFilter(evt.target.value))
        }
      />
    </FormContainer>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
