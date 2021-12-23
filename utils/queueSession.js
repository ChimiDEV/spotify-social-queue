import { v5 as uuid } from 'uuid';

const UUID_NAMESPACE = '6cf2a1e4-6b1d-45fc-aae7-3b5a675593f9';

export const queueIdFromUser = ({ id, displayName }) =>
  uuid(`${displayName}@${id}`, UUID_NAMESPACE);
