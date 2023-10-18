import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Navigation from 'components/Navigatin/Navigation';
import AuthNavigation from 'components/Navigatin/AuthNavigation';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors';

function Header() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        gap: '20px',
        padding: '15px',
      }}
    >
      {isLoggedIn ? <AuthNavigation /> : <Navigation />}
    </AppBar>
  );
}

export default Header;
