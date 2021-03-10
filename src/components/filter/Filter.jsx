import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/selectors';
import * as contactsActions from '../../redux/actions';

import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        autoComplete="off"
        className={css.filterInput}
        type="text"
        placeholder="Enter contact name"
        value={value}
        onChange={evt =>
          dispatch(contactsActions.changeFilter(evt.target.value))
        }
      />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
