import { Box, Button } from '@mui/material';
import { styled } from '@stitches/react';

const CenteredHeadline = styled('h2', {
  display: 'block',
  textAlign: 'center',
  color: '#fff',
});

export default function Home() {
  return (
    <Box sx={{ width: '100vw', marginTop: '50px' }}>
      <CenteredHeadline>Spotify Social Queue</CenteredHeadline>
      <Button variant="contained" sx={{ margin: '0 auto', display: 'block' }}>
        Starte eine Session
      </Button>
    </Box>
  );
}
