import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from 'redux/thunk';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import { Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';

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
    <Paper
      sx={theme => ({
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bgcolor: theme.palette.bgDark,
        alignItems: 'center',
        maxWidth: '500px',
        width: '100%',
        padding: '15px 30px 36px',
        borderRadius: '14px',
        zIndex: '10',
      })}
      elevation={8}
      component={motion.div}
      initial={{ y: 400 }}
      animate={{ y: 0 }}
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
          color="input"
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
          color="input"
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
    </Paper>
  );
};
