import { styled } from '@stitches/react';
import { Box, Button, Link, Modal } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/router';
import QRCode from 'qrcode.react';

const modalTheme = createTheme({
  palette: {
    primary: {
      main: '#24a148',
    },
    info: {
      main: '#24a148',
    },
    text: {
      primary: '#000000',
      secondary: '#21272a',
      disabled: '#c1c7cd',
    },
    action: {
      hover: '#c1c7cd',
    },
  },
});

const CenteredBox = styled(Box, {
  position: 'absolute',
  top: '30%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '96vw',
  backgroundColor: '#f2f4f8',
  padding: '20px',
});

export default function RedirectModal({ open, href, onClose }) {
  return (
    <Modal open={open}>
      <CenteredBox>
        <ThemeProvider theme={modalTheme}>
          <Box sx={{ marginTop: '15px' }}>
            <Box>
              Okay, deine Session wurde erstellt!
              <br />
              Teile mit deinen Freunden diesen Link oder QR Code:
            </Box>
            <Box sx={{ marginTop: '15px' }}>
              <Link href={href}>{href}</Link>
            </Box>
            <Box sx={{ marginTop: '5px' }}>
              <QRCode value={href} />
            </Box>

            <Box sx={{ marginTop: '15px' }}>
              <Button variant="contained" onClick={onClose}>
                Erledigt
              </Button>
            </Box>
          </Box>
        </ThemeProvider>
      </CenteredBox>
    </Modal>
  );
}
