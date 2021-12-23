import Cookies from 'cookies';
import { AUTH_COOKIE } from '../../../utils/auth';
import getSession from '../../../utils/httpSession';

export default async function handler(req, res) {
  const session = await getSession(req, res);
  await session.destroy();
  const cookies = new Cookies(req, res);

  cookies.set(AUTH_COOKIE);

  return res.json({ message: 'Ok' });
}
