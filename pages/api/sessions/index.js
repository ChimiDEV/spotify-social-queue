import { protectedRoute } from '../../../utils/auth';

const handler = (req, res) =>
  res.json({
    message: 'Ok',
    sid: req.auth.queueId,
    href: `/sessions/${req.auth.queueId}`,
  });

export default protectedRoute(handler, { redirect: true });
