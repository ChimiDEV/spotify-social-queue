import crypto from 'crypto';
import getSession from '../../../utils/httpSession';
import _ from 'lodash/fp';
import { ACCOUNT_URL, AUTHORIZE_SCOPE } from '../../../utils/spotify';

const queryString = _.pipe(_.entries, _.map(_.join('=')), _.join('&'));
const { CLIENT_ID, REDIRECT_URI } = process.env;

export default async function handler(req, res) {
  const state = crypto.randomBytes(64).toString('hex');
  const session = await getSession(req, res);
  session.spotifyState = state;

  return res.redirect(
    `${ACCOUNT_URL}/authorize?${queryString({
      response_type: 'code',
      state,
      client_id: CLIENT_ID,
      scope: AUTHORIZE_SCOPE,
      redirect_uri: REDIRECT_URI,
    })}`,
  );
}
