import { AppBar, Typography, IconButton } from '@mui/material';
import AuthNavigation from 'components/Navigatin/AuthNavigation';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInSelector, themeSelector } from 'redux/selectors';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { changeTheme } from 'redux/themeSlice';

function Header() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
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
      <IconButton
        sx={{ marginLeft: 'auto' }}
        onClick={() =>
          dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'))
        }
      >
        {theme === 'light' ? <LightModeIcon /> : <Brightness4Icon />}
      </IconButton>
      {isLoggedIn && <AuthNavigation />}
    </AppBar>
  );
}

export default Header;
