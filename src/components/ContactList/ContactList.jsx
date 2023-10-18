import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacsThunk } from 'redux/thunk';
import { isLoggedInSelector, visibleItemsSelector } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(visibleItemsSelector);
  const isLoggedIn = useSelector(isLoggedInSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getContacsThunk());
    }
  }, [dispatch, isLoggedIn]);

  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};
