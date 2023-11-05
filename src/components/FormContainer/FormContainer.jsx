import { Typography, Box, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function FormContainer() {
  const location = useLocation();
  const [isLogin, setPage] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/login') {
      setPage(true);
      return;
    }
    setPage(false);
  }, [location]);

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1000px',
        height: '580px',
        borderRadius: '14px',
        display: 'flex',
        flexDirection: isLogin ? 'row' : 'row-reverse',
        overflow: 'hidden',
        boxShadow:
          'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;',
      }}
      component={motion.div}
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box
        sx={{
          p: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '50%',
          gap: '8px',
        }}
        component={motion.div}
        layout="true"
        style={{
          borderRadius: '25%',
          background:
            'linear-gradient(90deg, rgba(249,178,8,1) 0%, rgba(252,84,4,1) 51%)',
        }}
        animate={{
          borderTopRightRadius: isLogin ? '25%' : '0',
          borderBottomRightRadius: isLogin ? '25%' : '0',
          borderTopLeftRadius: isLogin ? '0' : '25%',
          borderBottomLeftRadius: isLogin ? '0' : '25%',
          background: isLogin
            ? 'linear-gradient(90deg, rgba(249,178,8,1) 0%, rgba(252,84,4,1) 51%)'
            : 'linear-gradient(90deg, rgba(252,84,4,1) 39%, rgba(249,178,8,1) 100%)',
        }}
        transition={{ duration: 0.5 }}
      >
        <Typography
          variant="h2"
          component={motion.h2}
          color={'white'}
          sx={{
            textAlign: 'center',
            fontWeight: '600',
          }}
          layout="true"
          transition={{
            duration: 0.3,
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
          Enter your personal details to use all of the features.
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
        <Button
          sx={{
            border: '1px solid white',
            width: '150px',
            color: 'white',
            p: '8px, 22px',
          }}
          onClick={() => navigate(isLogin ? '/register' : '/login')}
        >
          {isLogin ? 'SIGN UP' : 'LOG IN'}
        </Button>
      </Box>
      <Outlet />
    </Box>
  );
}

export default FormContainer;
