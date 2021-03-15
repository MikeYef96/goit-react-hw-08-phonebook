import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import FormContainer from '../../lib/FormContainer';
import Form from '../../lib/Form';
import Input from '../../lib/Input';
import PrimaryButton from '../../lib/PrimaryButton';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import NumberFormat from 'react-number-format';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import css from './ContactForm.module.css';

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(/^([^0-9]*)$/, 'Name should not contain numbers')
    .required('First name is a required field'),
  number: yup.string().required('Phone number is a required field'),
});

export default function ContactForm() {
  // eslint-disable-next-line
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = evt => {
    const { value } = evt.currentTarget;
    setNumber(value);
  };

  const { register, errors } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const handleFormSubmit = evt => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already exists!`);
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
    evt.target.reset();
    setNumber('');
  };

  return (
    <FormContainer>
      {' '}
      <Form onSubmit={handleFormSubmit}>
        <Input
          autoComplete="off"
          className={css.input}
          type="text"
          // placeholder="Enter name"
          name="name"
          label="Name"
          value={name}
          error={!!errors.name}
          helperText={errors?.name?.message}
          ref={register}
          // onChange={handleChange}
          // required
        />

        <NumberFormat
          autoComplete="off"
          className={css.input}
          type="tel"
          label="Phone number 0XX XXX XX XX"
          inputMode="numeric"
          // placeholder="Enter number"
          name="number"
          error={!!errors.number}
          helperText={errors?.number?.message}
          inputRef={register}
          customInput={Input}
          format="+38 (###) ### ## ##"
          value={number}
          onChange={handleChange}
          // required
        />
        <PrimaryButton
          startIcon={<PersonAddIcon />}
          type="submit"
          color="primary"
          reset
        >
          Add contact
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}
