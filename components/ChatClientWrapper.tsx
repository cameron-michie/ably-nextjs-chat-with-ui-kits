'use client';

import { useEffect, useState } from 'react';
import { ChatClientProvider } from '@ably/chat/react';
import { ChatClient } from '@ably/chat';
import ablyClient from '../lib/ably-client';

interface ChatClientWrapperProps {
  children: React.ReactNode;
}

export default function ChatClientWrapper({ children }: ChatClientWrapperProps) {
  const [chatClient, setChatClient] = useState<ChatClient | null>(null);

  useEffect(() => {
    if (ablyClient) {
      const client = new ChatClient(ablyClient);
      setChatClient(client);
    }
  }, []);

  if (!chatClient) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing Chat Client...</p>
        </div>
      </div>
    );
  }

  return (
    <ChatClientProvider client={chatClient}>
      {children}
    </ChatClientProvider>
  );
}