import { Box, Button } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Fillter';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function ContactsPage() {
  const [isActivContactForm, setIsActivContactForm] = useState(false);

  return (
    <>
      {isActivContactForm && <ContactForm />}
      <Box
        sx={{
          padding: '15px',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          gap: '15px',
        }}
      >
        <Filter />
        <ContactList />
      </Box>

      <Button
        variant="contained"
        sx={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          borderRadius: '50%',
          width: '64px',
          height: '64px',
        }}
        onClick={() => setIsActivContactForm(!isActivContactForm)}
      >
        <AddIcon color="black" sx={{ fontSize: 40 }} />
      </Button>
    </>
  );
}

export default ContactsPage;
