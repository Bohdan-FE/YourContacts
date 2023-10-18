import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getContacsThunk, loginThunk } from 'redux/thunk';

function LogInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk({ email, password }));
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
      action="submit"
      onSubmit={handleSubmit}
    >
      <Typography variant="h3">Log In</Typography>
      <TextField
        required
        id="email"
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        required
        id="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" size="large">
        Log In
      </Button>
    </Box>
  );
}

export default LogInForm;
