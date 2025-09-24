'use client';

import {
  App,
  ThemeProvider,
  AvatarProvider,
  ChatSettingsProvider
} from '@ably/chat-react-ui-components';

export default function ChatPage() {

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
          // customColors: ['bg-blue-500', 'bg-red-500', 'bg-green-500'],
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
          <App
            initialRoomNames={['general', 'random', 'tech-talk', '123test']}
            width="100%"
            height="97vh"
          />
        </ChatSettingsProvider>
      </AvatarProvider>
    </ThemeProvider>
  );
}
