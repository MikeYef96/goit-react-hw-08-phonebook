import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
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
