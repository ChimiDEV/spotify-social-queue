import spotify from '../../../../utils/spotify';

export default async function handler(req, res) {
  res.status(200).json(await spotify(req.query.sid).user());
}
