import { AppBar, Typography } from '@mui/material';
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
        bgcolor: 'FC5404',
      }}
    >
      <Typography component={'span'}>LOGO</Typography>
      {isLoggedIn && <AuthNavigation />}
    </AppBar>
  );
}

export default Header;
