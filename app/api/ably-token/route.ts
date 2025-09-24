import { NextResponse } from 'next/server';
import * as Ably from 'ably';

const apiKey = process.env.ABLY_API_KEY;

if (!apiKey) {
  throw new Error('ABLY_API_KEY is required');
}

export async function POST() {
  try {
    console.log('Token request received');

    const clientId = 'user-' + Math.random().toString(36).substr(2, 9);
    const ablyRest= new Ably.Rest({ key: apiKey });

    const tokenRequest = await ablyRest.auth.createTokenRequest({
      clientId,
      capability: {
        '*': ['*']
      }
    });

    return NextResponse.json(tokenRequest);
  } catch (error) {
    console.error('Error creating Ably token:', error);
    return NextResponse.json(
      { error: 'Failed to create token', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
