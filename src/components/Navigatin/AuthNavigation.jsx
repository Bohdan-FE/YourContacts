import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthNavigation() {
  const { user } = useSelector(state => state.auth);
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
      }}
    >
      <Typography varian="h6" mx={'20px'}>{`Welcome ${user.name}`}</Typography>
      <Button variant="contained">Log Out</Button>
    </Box>
  );
}

export default AuthNavigation;
