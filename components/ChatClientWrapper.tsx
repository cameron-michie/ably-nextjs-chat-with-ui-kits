'use client';

import { useEffect, useState } from 'react';
import { ChatClientProvider } from '@ably/chat/react';
import { ChatClient } from '@ably/chat';
import getAblyClient from '../lib/ably-client';

interface ChatClientWrapperProps {
  children: React.ReactNode;
}

export default function ChatClientWrapper({ children }: ChatClientWrapperProps) {
  const [chatClient, setChatClient] = useState<ChatClient | null>(null);

  useEffect(() => {
    const ablyInstance = getAblyClient();
    if (ablyInstance) {
      const client = new ChatClient(ablyInstance);
      setChatClient(client);
    }
  }, []);

  if (!chatClient) {
    return ( <div/> );
  }

  return (
    <ChatClientProvider client={chatClient}>
      {children}
    </ChatClientProvider>
  );
}
