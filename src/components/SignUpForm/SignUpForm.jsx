import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { signupThunk } from 'redux/thunk';

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
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        padding: '15px',
      }}
      noValidate
      autoComplete="off"
      action="submit"
      onSubmit={handleSubmit}
    >
      <Typography variant="h3">Register</Typography>
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        required
        id="signup-email"
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        required
        autoComplete="off"
        type="password"
        id="signup-password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" size="large">
        Sign Up
      </Button>
    </Box>
  );
}

export default SignUpForm;
