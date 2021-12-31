import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const AlbumImage = ({ src }) => (
  <div>
    <img src={src} alt="Album Cover" />
  </div>
);

export default function WishCard({ song, onWish }) {
  return (
    <Card
      variant="outlined"
      sx={{
        marginBottom: '15px',
        backgroundColor: '#343a3f',
        width: '350px',
      }}
    >
      <CardContent>
        <AlbumImage src={song.album.image} />
        <Typography variant="h5">{song.name}</Typography>
        <Typography>{song.artist}</Typography>
        {song.features && (
          <Typography sx={{ mb: 1, color: '#a2a9b0' }}>
            {song.features}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onWish(song.id)}>
          Wünschen
        </Button>
      </CardActions>
    </Card>
  );
}
