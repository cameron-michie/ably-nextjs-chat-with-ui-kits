import { ChatClient } from '@ably/chat';
import ablyClient from './ably-client';

let chatClient: ChatClient | null = null;

const getChatClient = () => {
  if (typeof window !== 'undefined' && !chatClient) {
    chatClient = new ChatClient(ablyClient, {
      clientId: 'user-' + Math.random().toString(36).substr(2, 9)
    });
  }
  return chatClient;
};

export default getChatClient();