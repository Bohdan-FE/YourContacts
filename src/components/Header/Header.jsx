import { AppBar, Typography } from '@mui/material';
import AuthNavigation from 'components/Navigatin/AuthNavigation';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from 'redux/selectors';

function Header() {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <AppBar
      position="static"
      sx={theme => ({
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '20px',
        padding: '15px 25px',
        height: '71px',
        bgcolor: theme.palette.primary.main,
      })}
    >
      <Typography
        sx={{ fontSize: '28px', fontWeight: '700', lineHeight: '0.5' }}
      >
        YourContacts
        <Typography
          component="span"
          sx={{
            display: 'block',
            fontSize: '18px',
            paddingLeft: '10px',
          }}
        >
          be in touch
        </Typography>
      </Typography>
      {isLoggedIn && <AuthNavigation />}
    </AppBar>
  );
}

export default Header;
