'use client';

import { App } from '@ably/chat-react-ui-components';

interface FullAppDemoProps {
  initialRooms: string[];
}

export default function FullAppDemo({ initialRooms }: FullAppDemoProps) {
  return (
    <div className="max-w-6xl mx-auto">
      <App
        initialRoomNames={initialRooms}
        width="100%"
        height="80vh"
      />
    </div>
  );
}