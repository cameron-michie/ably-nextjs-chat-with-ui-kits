'use client';

import {
  App,
  ThemeProvider,
  AvatarProvider,
  ChatSettingsProvider
} from '@ably/chat-react-ui-components';

export default function Home() {
  return (
    <ThemeProvider>
      <AvatarProvider>
        <ChatSettingsProvider>
          <App
            initialRoomNames={['general', 'random', 'tech-talk']}
            width="100%"
            height="97vh"
          />
        </ChatSettingsProvider>
      </AvatarProvider>
    </ThemeProvider>
  );
}
