import { useTheme } from '@emotion/react';
import { Box } from '@mui/material';
import { RotatingLines } from 'react-loader-spinner';

function Spinner() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        bgcolor: 'rgb(0 0 0 / 27%)',
        position: 'fixed',
        top: '0',
        left: '0',
        zIndex: '10',
        padding: '8px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <RotatingLines
        strokeColor={theme.palette.primary.main}
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Box>
  );
}

export default Spinner;
