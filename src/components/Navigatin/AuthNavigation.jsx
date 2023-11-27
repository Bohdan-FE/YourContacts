import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/thunk';

function AuthNavigation() {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Typography
        varian="h6"
        mx={'20px'}
        textAlign={'end'}
      >{`Welcome ${user.name}`}</Typography>
      <Button variant="contained" onClick={() => dispatch(logoutThunk())}>
        Log Out
      </Button>
    </Box>
  );
}

export default AuthNavigation;
