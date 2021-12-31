import { getSpotifyAuth } from '../../../../utils/cache';
import spotify from '../../../../utils/spotify';

export default async function handler(req, res) {
  switch (req.method) {
    case 'GET':
      const auth = await getSpotifyAuth(req.query.sid);
      if (!auth) {
        return res.status(404).json({ message: 'Not Found' });
      }
      return res.json({ message: 'Ok' });
    case 'POST':
      await spotify(req.query.sid).addToQueue(req.query.track_id);
      return res.status(204).send();
  }
}
