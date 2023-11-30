import { Box } from '@mui/material';
import Header from 'components/Header/Header';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/register');
    }
  }, [location, navigate]);

  return (
    <>
      <Header />
      <Box
        sx={theme => ({
          margin: '0 auto',
          p: '15px',
          minHeight: 'calc(100vh - 71px)',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          overflowX: 'hidden',
          position: 'relative',
          bgcolor: theme.palette.background.paper,
        })}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
}

export default Layout;
