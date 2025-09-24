import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ChatClientWrapper from '../components/ChatClientWrapper';
import "./globals.css";
import '@ably/chat-react-ui-components/dist/style.css';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ably Chat Demo",
  description: "A demo of Ably Chat with React UI Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ChatClientWrapper>
          {children}
        </ChatClientWrapper>
      </body>
    </html>
  );
}
