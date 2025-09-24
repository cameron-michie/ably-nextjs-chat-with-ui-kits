import * as Ably from 'ably';

let client: Ably.Realtime | null = null;

const getAblyClient = () => {
  if (typeof window !== 'undefined' && !client) {
    client = new Ably.Realtime({
      authUrl: '/api/ably-token',
      authMethod: 'POST',
      autoConnect: true
    });
  }
  return client;
};

export default getAblyClient;
