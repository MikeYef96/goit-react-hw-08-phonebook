import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegistrationPage } from './pages/RegistrationPage';
import { LoginPage } from './pages/LoginPage';
import { ContactsPage } from './pages/ContactsPage';

export const App = () => (
  <>
    <Route exact path="/" component={HomePage} />
    <Route path="/register" component={RegistrationPage} />
    <Route path="/login" component={LoginPage} />
    <Route path="/contacts" component={ContactsPage} />
  </>
);
