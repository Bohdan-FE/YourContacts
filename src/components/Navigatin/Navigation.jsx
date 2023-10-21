import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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
