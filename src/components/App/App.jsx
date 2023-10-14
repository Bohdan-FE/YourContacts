import SignUpForm from 'components/SignUpForm/SignUpForm';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Fillter';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <h1>Sign Up</h1>
      <SignUpForm />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};
