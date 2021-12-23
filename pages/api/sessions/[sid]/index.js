import spotify from '../../../../utils/spotify';

export default async function handler(req, res) {
  // Only on POST ? ... Doesn't really matter for now.
  await spotify(req.query.sid).addToQueue(req.query.track_id);

  return res.status(204).send();
}
