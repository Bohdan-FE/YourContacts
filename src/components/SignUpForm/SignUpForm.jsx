import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signupThunk } from 'redux/thunk';
import { motion } from 'framer-motion';

function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signupThunk({ name, email, password }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px',
        padding: '15px',
        width: '50%',
        p: '36px',
      }}
      noValidate
      autoComplete="off"
      action="submit"
      onSubmit={handleSubmit}
      component={motion.form}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.65 }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: '32px',
          fontWeight: '600',
        }}
      >
        REGISTER
      </Typography>
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        sx={{
          width: '100%',
        }}
      />
      <TextField
        required
        id="signup-email"
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        sx={{
          width: '100%',
        }}
      />
      <TextField
        required
        autoComplete="off"
        type="password"
        id="signup-password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        sx={{
          width: '100%',
        }}
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          width: '150px',
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUpForm;
