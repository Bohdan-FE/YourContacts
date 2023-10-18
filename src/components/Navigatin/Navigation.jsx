import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'end',
        gap: '20px',
      }}
    >
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Typography variant="h6" color={'white'}>
          Log In
        </Typography>
      </Link>

      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Typography variant="h6" color={'white'}>
          Register
        </Typography>
      </Link>
    </Box>
  );
}

export default Navigation;
