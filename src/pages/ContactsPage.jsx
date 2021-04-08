import ContactForm from '../components/СontactForm/index.js';
import ContactList from '../components/СontactList/index.js';
import Filter from '../components/Filter/index.js';
import css from 'App.module.css';

export default function ContactsPage() {
  return (
    <div className={css.container}>
      <h1 className={css.main_header}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.contacts_header}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
