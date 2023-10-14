import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Button } from '@mui/material';
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
        '& .MuiTextField-root': { m: 1, width: '25ch' },
        display: 'flex',
        flexDirection: 'column',
      }}
      noValidate
      autoComplete="off"
      action="submit"
      onSubmit={handleSubmit}
    >
      <TextField
        required
        id="name"
        label="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        required
        id="email"
        label="E-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        required
        type="password"
        id="password"
        label="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button type="submit">Sign Up</Button>
    </Box>
  );
}

export default SignUpForm;
