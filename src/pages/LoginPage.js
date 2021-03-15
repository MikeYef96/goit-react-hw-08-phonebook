import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';
import FormContainer from '../lib/FormContainer';
import Form from '../lib/Form';
import Input from '../lib/Input';
import PrimaryButton from '../lib/PrimaryButton';

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Input
          type="email"
          name="email"
          value={email}
          label="Email"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          value={password}
          label="Password"
          onChange={handleChange}
        />
        <PrimaryButton type="submit" color="primary">
          Sign in
        </PrimaryButton>
      </Form>
    </FormContainer>
  );
}
