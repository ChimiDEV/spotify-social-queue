export const fromUserResponse = ({
  display_name: displayName,
  id,
  images: [{ url: image }],
}) => ({
  id,
  displayName,
  image,
});

export const fromTrackItem = ({
  album: {
    images: [, image],
    ...album
  },
  artists: [artist, ...features],
  id,
  uri,
  name,
}) => ({
  id,
  uri,
  name,
  album: { image: image.url, name: album.name },
  artist: artist.name,
  ...(features.length > 0 && {
    features: features.map(({ name }) => name),
  }),
});
