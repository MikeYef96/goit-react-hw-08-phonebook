import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import { contactsSelectors } from 'redux/contacts';
import { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1, 0, 1),
    background: 'linear-gradient(45deg, #8fff9e 15%, #6f7ff7 80%)',
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

  const contacts = useSelector(contactsSelectors.getVisibleContacts);

  const onDeleteContact = evt =>
    dispatch(
      contactsOperations.deleteContact(
        evt.target.closest('[data-id]').dataset.id,
      ),
    );

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} data-id={id}>
          <span className={css.listItemText}>{name}:</span>
          <span className={css.listItemText}>{number}</span>
          <Button
            startIcon={<DeleteIcon fontSize="small" color="white" />}
            className={styles.root}
            type="button"
            onClick={onDeleteContact}
          >
            Delete
          </Button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
