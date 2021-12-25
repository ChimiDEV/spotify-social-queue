import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { PlaylistAdd, QueueMusic, AddBox } from '@mui/icons-material';
import { useState } from 'react';
import { useRouter } from 'next/router';

const byValue = ['wish', 'queue', 'poll'];
const byPath = { '/wish': 0, '/queue': 1, '/poll': 2 };

// To be updated

/**
 *
 * @param {{selectedLabel: 'wish'|'queue'|'poll', onChange: function}} props
 * @returns
 */
export default function MenuBar() {
  const router = useRouter();
  const [selectedLabel, setLabel] = useState(byPath[router.pathname] || 0);

  return (
    <BottomNavigation
      showLabels
      sx={{
        position: 'fixed',
        top: 'auto',
        bottom: 0,
        width: '100vw',
        backgroundColor: '#343a3f',
      }}
      value={selectedLabel}
      onChange={(e, value) => {
        setLabel(value);
        router.push(`/${byValue[value]}`);
      }}
    >
      <BottomNavigationAction
        label="Song wünschen"
        icon={<PlaylistAdd />}
        sx={{ color: '#fff' }}
      />
      <BottomNavigationAction
        label="Queue"
        icon={<QueueMusic />}
        sx={{ color: '#fff' }}
      />
      {/* <BottomNavigationAction
        label="Einstellungen"
        icon={<AddBox />}
        sx={{ color: '#fff' }}
      /> */}
    </BottomNavigation>
  );
}
