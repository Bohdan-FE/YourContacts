import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/thunk';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button } from '@mui/material';

export const ContactForm = ({ handleOpenContactForm }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const { contacts } = useSelector(state => state.contacts);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    dispatch(addContactThunk({ name, number }));
    reset();
    e.currentTarget.reset();
    handleOpenContactForm();
  };

  const handleChange = ({ target }) => {
    if (target.name === 'name') {
      setName(target.value);
    }
    if (target.name === 'number') {
      setNumber(target.value);
    }
  };

  return (
    <Box
      sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: 'white',
        alignItems: 'center',
        maxWidth: '500px',
        width: '100%',
        padding: '15px 30px 36px',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
        borderRadius: '14px',
        zIndex: '10',
      })}
    >
      <Button
        variant="outline"
        onClick={handleOpenContactForm}
        sx={{
          borderRadius: '50%',
          width: '46px',
          height: '46px',
          padding: '0',
          minWidth: '0',
          alignSelf: 'end',
        }}
      >
        <CloseIcon />
      </Button>
      <FormControl
        component="form"
        action="submit"
        onSubmit={handleSubmit}
        sx={theme => ({
          alignItems: 'center',
          gap: '30px',
          width: '100%',
        })}
      >
        <FormLabel
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            color: 'black',
            textAlign: 'center',
          }}
        >
          Create new contact
        </FormLabel>
        <TextField
          id="name"
          name="name"
          label="Name"
          value={name}
          onChange={handleChange}
          sx={{
            width: '100%',
          }}
          required
        />
        <TextField
          id="number"
          name="number"
          label="Phone"
          value={number}
          onChange={handleChange}
          sx={{
            width: '100%',
          }}
          required
          type="number"
        />
        <Button
          variant="contained"
          sx={{
            width: '150px',
          }}
          type="submite"
        >
          Create
        </Button>
      </FormControl>
    </Box>

    // <Form action="submit" onSubmit={handleSubmit}>
    //   <label>
    //     Name
    //     <input
    //       onChange={handleChange}
    //       value={name}
    //       type="text"
    //       name="name"
    //       pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       required
    //     />
    //   </label>
    //   <label>
    //     Number
    //     <input
    //       onChange={handleChange}
    //       value={number}
    //       type="tel"
    //       name="number"
    //       pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       required
    //     />
    //   </label>

    //   <button>Add contact</button>
    // </Form>
  );
};
