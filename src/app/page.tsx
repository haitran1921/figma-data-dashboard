export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm lg:flex">
        <h1 className="text-4xl font-bold mb-8">Figma Data Dashboard</h1>
        <p className="text-xl mb-4">
          Connect to the Figma API to fetch and export design data.
        </p>
        
        <div className="mt-8 p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Connect to Figma</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="fileKey" className="block text-sm font-medium mb-1">
                Figma File Key
              </label>
              <input
                type="text"
                id="fileKey"
                className="w-full p-2 border rounded"
                placeholder="Enter your Figma file key"
              />
            </div>
            
            <div>
              <label htmlFor="accessToken" className="block text-sm font-medium mb-1">
                Personal Access Token
              </label>
              <input
                type="password"
                id="accessToken"
                className="w-full p-2 border rounded"
                placeholder="Enter your Figma personal access token"
              />
            </div>
            
            <div className="pt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Fetch Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}