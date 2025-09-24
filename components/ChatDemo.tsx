'use client';

import { ChatRoomProvider } from '@ably/chat/react';
import {
  ChatWindow,
  RoomReaction
} from '@ably/chat-react-ui-components';

interface ChatDemoProps {
  roomId: string;
  userName: string;
  avatar?: string;
}

const reactionEmojis = ['👍', '❤️', '😂', '😮', '😢', '😡'];

export default function ChatDemo({ roomId, userName, avatar }: ChatDemoProps) {
  return (
    <ChatRoomProvider
      id={roomId}
      options={{
        reactions: true,
        typing: true,
        presence: true
      }}
    >
      <div className="max-w-4xl mx-auto">
        <ChatWindow
          roomName={roomId}
          customHeaderContent={
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  {avatar} {userName}
                </span>
                <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  Room: {roomId}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-500">Room Reactions:</span>
                <div className="flex gap-1">
                  {reactionEmojis.map((emoji) => (
                    <RoomReaction
                      key={emoji}
                      type={emoji}
                      className="text-sm hover:scale-110 transition-transform cursor-pointer p-1 rounded hover:bg-gray-100"
                    />
                  ))}
                </div>
              </div>
            </div>
          }
          enableTypingIndicators={true}
          className="h-[600px] rounded-lg shadow-lg"
        />
      </div>
    </ChatRoomProvider>
  );
}
