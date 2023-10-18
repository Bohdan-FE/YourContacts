import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Fillter';

function ContactsPage() {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
}

export default ContactsPage;
