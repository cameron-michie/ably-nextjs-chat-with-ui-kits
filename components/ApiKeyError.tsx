interface ApiKeyErrorProps {
  error: string;
}

export default function ApiKeyError({ error }: ApiKeyErrorProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="max-w-2xl bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Ably API Key Required</h2>
          <p className="text-gray-600 mb-6">{error}</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 text-left">
          <h3 className="font-semibold text-gray-900 mb-3">Quick Setup:</h3>
          <ol className="text-sm text-gray-600 space-y-2">
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">1</span>
              <span>Go to <a href="https://ably.com/signup" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ably.com/signup</a> to get a free API key</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">2</span>
              <span>Copy your API key from the Ably dashboard</span>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">3</span>
              <div>
                <div>Replace the key in your <code className="bg-gray-200 px-2 py-1 rounded text-xs">.env.local</code> file:</div>
                <div className="bg-gray-900 text-green-400 text-xs p-3 rounded mt-2 font-mono">
                  NEXT_PUBLIC_ABLY_API_KEY=your-actual-api-key-here
                </div>
              </div>
            </li>
            <li className="flex items-start">
              <span className="bg-blue-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 mt-0.5 flex-shrink-0">4</span>
              <span>Restart the development server</span>
            </li>
          </ol>
        </div>

        <div className="mt-6">
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Reload Page
          </button>
        </div>
      </div>
    </div>
  );
}