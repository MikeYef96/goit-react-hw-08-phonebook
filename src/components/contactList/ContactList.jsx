import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import css from './ContactList.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
  },
}));

export default function ContactList() {
  const styles = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getVisibleContacts);

  const onDeleteContact = evt =>
    dispatch(
      contactsOperations.deleteContact(
        evt.target.closest('[data-id]').dataset.id,
      ),
    );

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li className={css.contactListItem} key={id} data-id={id}>
          <div className={css.listItemContainer}>
            <p>
              {name}: <span>{number}</span>
            </p>
            <Button
              startIcon={<DeleteIcon fontSize="small" color="white" />}
              className={styles.root}
              type="button"
              onClick={onDeleteContact}
            >
              Delete
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  onDeleteContact: PropTypes.func,
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
