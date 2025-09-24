import * as Ably from 'ably';

const apiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY;

if (!apiKey) {
  throw new Error(
    'NEXT_PUBLIC_ABLY_API_KEY is required. Please add your Ably API key to .env.local'
  );
}

let client: Ably.Realtime | null = null;

const getAblyClient = () => {
  if (typeof window !== 'undefined' && !client) {
    const clientId = 'user-' + Math.random().toString(36).substr(2, 9);
    client = new Ably.Realtime({
      key: apiKey,
      clientId: clientId,
      autoConnect: typeof window !== 'undefined'
    });
  }
  return client;
};

export default getAblyClient;
