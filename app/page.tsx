'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Ably Chat UI Components Demo
        </h1>
        <div className="space-y-4">
          <Link href="/app" className="block text-blue-600 hover:text-blue-800 underline">
           -  {"App"}
          </Link>
          <Link href="/livestream" className="block text-blue-600 hover:text-blue-800 underline">
           -  {"Livestream"}
          </Link>
        </div>
      </div>
    </div>
  );
}
