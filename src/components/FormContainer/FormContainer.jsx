import { Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function FormContainer() {
  const location = useLocation();
  const [isLogin, setPage] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const navigate = useNavigate();

  const desktopAnimation = {
    borderTopRightRadius: isLogin ? '25%' : '0',
    borderBottomRightRadius: isLogin ? '25%' : '0',
    borderTopLeftRadius: isLogin ? '0' : '25%',
    borderBottomLeftRadius: isLogin ? '0' : '25%',
    background: isLogin
      ? 'linear-gradient(90deg, rgba(249,178,8,1) 0%, rgba(252,84,4,1) 51%)'
      : 'linear-gradient(90deg, rgba(252,84,4,1) 39%, rgba(249,178,8,1) 100%)',
  };

  const mobileAnimation = {
    borderTopLeftRadius: '26%',
    borderTopRightRadius: '26%',
  };

  useEffect(() => {
    if (location.pathname === '/login') {
      setPage(true);
      return;
    }
    setPage(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box
      sx={theme => ({
        width: '100%',
        height: '580px',
        maxWidth: '1000px',
        borderRadius: '14px',
        display: 'flex',
        flexDirection: isLogin ? 'row' : 'row-reverse',
        overflow: 'hidden',
        bgcolor: 'white',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column-reverse',
          maxHeight: '600px',
        },
      })}
      component={motion.div}
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={theme => ({
          p: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          gap: '8px',
          background:
            'linear-gradient(90deg, rgba(249,178,8,1) 0%, rgba(252,84,4,1) 51%)',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '18%',
          },
        })}
        component={motion.div}
        layout
        animate={isMobile ? mobileAnimation : desktopAnimation}
        transition={{ duration: 0.5 }}
      >
        {!isMobile && (
          <>
            <Typography
              variant="h2"
              component={motion.h2}
              color={'white'}
              sx={{
                textAlign: 'center',
                fontWeight: '600',
              }}
            >
              {isLogin ? 'Welcome Back!' : 'Welcome, Friend!'}
            </Typography>
            <Typography
              component="p"
              color={'white'}
              sx={{
                textAlign: 'center',
              }}
            >
              Enter your personal details to use all of the features
            </Typography>
            <Typography
              component="p"
              color={'white'}
              sx={{
                textAlign: 'center',
              }}
            >
              or
            </Typography>
          </>
        )}
        <Button onClick={() => navigate(isLogin ? '/register' : '/login')}>
          {isLogin ? 'SIGN UP' : 'LOG IN'}
        </Button>
      </Box>
      <Box
        sx={theme => ({
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '82%',
          },
        })}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default FormContainer;
