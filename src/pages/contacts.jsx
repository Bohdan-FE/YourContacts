import { Box, Button } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Fillter';
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';

function ContactsPage() {
  const [isActivContactForm, setIsActivContactForm] = useState(false);

  const handleOpenContactForm = () => {
    document.body.style.overflowY = isActivContactForm ? 'visible' : 'hidden';
    setIsActivContactForm(!isActivContactForm);
  };

  return (
    <>
      {isActivContactForm && (
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            bgcolor: 'rgb(0 0 0 / 27%)',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '10',
            padding: '8px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <ContactForm handleOpenContactForm={handleOpenContactForm} />
        </Box>
      )}
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
        onClick={handleOpenContactForm}
      >
        <AddIcon color="black" sx={{ fontSize: 40 }} />
      </Button>
    </>
  );
}

export default ContactsPage;
