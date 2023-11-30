import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getContacsThunk } from 'redux/thunk';
import { isLoggedInSelector, visibleItemsSelector } from 'redux/selectors';
import { List } from '@mui/material';
import { AnimatePresence } from 'framer-motion';

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
    <List
      sx={theme => ({
        maxWidth: '600px',
        width: '100%',
        paddingBottom: '100px',
      })}
    >
      <AnimatePresence>
        {contacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}{' '}
      </AnimatePresence>
    </List>
  );
};
