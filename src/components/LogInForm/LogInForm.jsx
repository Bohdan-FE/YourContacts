import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/thunk';
import { motion } from 'framer-motion';

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
        LOG IN
      </Typography>
      <TextField
        required
        id="email"
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        sx={{
          width: '100%',
        }}
      />
      <TextField
        required
        type="password"
        id="password"
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
        Log In
      </Button>
    </Box>
  );
}

export default LogInForm;
