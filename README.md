# Ably NextJS Chat Demo with React UI Components

A functional demo showcasing Ably's Chat React UI Components integrated with Next.js. This demo demonstrates real-time messaging, room-level reactions, avatar customization, and multiple chat rooms.

## Features Demonstrated

- **Real-time Messaging**: Uses Ably's MessageList and MessageInput components
- **Room-level Reactions**: Interactive emoji reactions shared across the room
- **Avatar & Name Picker**: Customizable user identity with emoji avatars
- **Multiple Chat Rooms**: Switch between different chat rooms dynamically
- **Typing Indicators**: Real-time typing presence
- **Responsive Design**: Works seamlessly across devices

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- An Ably API key (get one free at [ably.com](https://ably.com))

### Installation

1. Clone and install dependencies:
```bash
npm install
```

2. Set up your Ably API key:
   - Get a free API key from https://ably.com/signup
   - Replace the value in `.env.local` with your actual Ably API key:
     ```
     ABLY_API_KEY=your-actual-ably-api-key
     ```
   - The API key is now used server-side only for token generation (more secure)

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) (or the port shown in terminal)

### Testing the Demo

1. **Single User Testing**:
   - Change your name and avatar in the Settings panel
   - Switch between different chat rooms
   - Try the room-level reactions

2. **Multi-User Testing**:
   - Open the same URL in multiple tabs or browsers
   - Use different names/avatars in each tab
   - Send messages and reactions to see real-time sync

## Architecture

### Ably Client Setup (Token-based Authentication)

The demo follows Ably's best practices for Next.js with secure token authentication:

- **`app/api/ably-token/route.ts`**: Server-side API route that generates Ably tokens
- **`lib/ably-client.ts`**: Singleton Ably Realtime client using token authentication
- **`components/ChatClientWrapper.tsx`**: Chat client wrapper with proper loading states

### Components

- **`components/ChatDemo.tsx`**: Main chat interface with MessageList, MessageInput, and RoomReactions
- **`components/UserSettings.tsx`**: Configurable settings panel for name, room, and avatar
- **`app/layout.tsx`**: Provides ChatClientProvider context
- **`app/page.tsx`**: Main demo page orchestrating all components

## UI Components Used

From `@ably/chat-react-ui-components`:

- `ChatClientProvider`: Provides chat client context
- `ChatRoomProvider`: Room-specific chat context with reactions/typing/presence enabled
- `MessageList`: Displays chat messages with real-time updates
- `MessageInput`: Input field for sending messages
- `RoomReactions`: Emoji reactions shared across the room

## Customization

The demo is designed to be simple and easily customizable:

- Modify reaction emojis in `ChatDemo.tsx`
- Add more avatar options in `UserSettings.tsx`
- Customize styling with Tailwind CSS classes
- Extend with additional Ably Chat UI components

## Learn More

- [Ably Chat React UI Components Documentation](https://ably.com/docs/chat/react-ui-components)
- [Ably Chat Getting Started Guide](https://ably.com/docs/chat/getting-started/react-ui-components)
- [Next.js Documentation](https://nextjs.org/docs)
