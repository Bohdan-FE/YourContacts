import AppBar from '@mui/material/AppBar';
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
