'use client';

import {
  ChatWindow,
  ThemeProvider,
  AvatarProvider,
  ChatSettingsProvider
} from '@ably/chat-react-ui-components';
import { ChatRoomProvider } from '@ably/chat/react';

export default function LivestreamPage() {
  return (
    <ThemeProvider
      options={{
        persist: true,
        detectSystemTheme: true,
        defaultTheme: 'light'
      }}
    >
      <AvatarProvider
        options={{
          persist: true,
          maxCacheSize: 50,
          onError: (error) => console.error('Avatar error:', error)
        }}
      >
        <ChatSettingsProvider
          initialGlobalSettings={{
            allowMessageUpdatesOwn: true,
            allowMessageUpdatesAny: false,
            allowMessageDeletesOwn: true,
            allowMessageDeletesAny: false,
            allowMessageReactions: true
          }}
        >
          <div className="flex h-screen">
            <div className="flex-1 bg-white flex items-center justify-center">
              <h1 className="text-black text-2xl font-bold">
                Livestream Placeholder
              </h1>
            </div>

            <div className="w-80 border-l border-gray-200">
              <ChatRoomProvider name="livestream-chat">
                <ChatWindow roomName="livestream-chat" height="100vh" />
              </ChatRoomProvider>
            </div>
          </div>
        </ChatSettingsProvider>
      </AvatarProvider>
    </ThemeProvider>
  );
}
