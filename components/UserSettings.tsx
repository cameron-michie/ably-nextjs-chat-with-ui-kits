'use client';

import { useState } from 'react';
import { AvatarEditor } from '@ably/chat-react-ui-components';

interface UserSettingsProps {
  userName: string;
  setUserName: (name: string) => void;
  roomId: string;
  setRoomId: (id: string) => void;
  avatar: string;
  setAvatar: (avatar: string) => void;
}

export default function UserSettings({
  userName,
  setUserName,
  roomId,
  setRoomId,
  avatar,
  setAvatar
}: UserSettingsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAvatarEditor, setShowAvatarEditor] = useState(false);

  const handleAvatarSave = (newAvatar: string) => {
    setAvatar(newAvatar);
    setShowAvatarEditor(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg mb-4">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left"
      >
        <h3 className="text-lg font-semibold">Settings</h3>
        <span className="text-gray-500">
          {isExpanded ? '▲' : '▼'}
        </span>
      </button>

      {isExpanded && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Chat Room
            </label>
            <input
              type="text"
              value={roomId}
              onChange={(e) => setRoomId(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter room name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Avatar
            </label>
            <div className="flex items-center gap-3">
              <div className="text-3xl">{avatar}</div>
              <button
                onClick={() => setShowAvatarEditor(true)}
                className="px-3 py-2 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Change Avatar
              </button>
            </div>

            {showAvatarEditor && (
              <div className="mt-3 p-4 border border-gray-200 rounded-md bg-gray-50">
                <AvatarEditor
                  currentAvatar={avatar}
                  onSave={handleAvatarSave}
                  onCancel={() => setShowAvatarEditor(false)}
                />
              </div>
            )}
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-medium text-blue-800 mb-2">Features Demonstrated:</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Complete ChatWindow UI Kit with built-in messaging</li>
              <li>• Room-level reactions with RoomReaction components</li>
              <li>• AvatarEditor component for user customization</li>
              <li>• PresenceCount showing active users</li>
              <li>• Multiple chat rooms support</li>
              <li>• Typing indicators and real-time presence</li>
              <li>• Message editing, deletion, and reactions</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}