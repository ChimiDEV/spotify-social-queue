import { styled } from '@stitches/react';
import { Box, Button, Modal, TextField } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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

const ModalInput = styled(TextField, {
  '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
    borderColor: 'Black',
  },
});

export default function ClipboardModal({ open, onClose, onChange, onSubmit }) {
  const withEnter = (handler) => (e) => {
    if (e.code !== 'Enter') return;
    handler();
  };

  return (
    <Modal open={open}>
      <CenteredBox>
        <ThemeProvider theme={modalTheme}>
          <ModalInput
            label="Spotify URL"
            variant="outlined"
            size="small"
            placeholder="Bitte füge den Spotify URL hier ein"
            fullWidth
            onChange={onChange}
            onKeyDown={withEnter(onSubmit)}
          />
          <Box sx={{ marginTop: '15px' }}>
            <Button onClick={onClose}>Abbrechen</Button>
            <Button variant="contained" onClick={onSubmit}>
              Ok
            </Button>
          </Box>
        </ThemeProvider>
      </CenteredBox>
    </Modal>
  );
}
