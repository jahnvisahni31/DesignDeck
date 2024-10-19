import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white p-4">
      <div className="mb-6 p-4 bg-purple-500 rounded-lg shadow-lg animate-fade-in">
        <h1 className="text-4xl font-extrabold mb-4 animate-bounce">
          DesignDeck Team is working on this page
        </h1>
      </div>

      <div className="mb-6 p-4 bg-pink-500 rounded-lg shadow-lg animate-fade-in">
        <p className="text-xl text-center px-4 max-w-lg">
          Stay tuned and keep working on your art. 🎨
        </p>
      </div>

      <Link href="/" className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md animate-pulse">
        Go back to Home
      </Link>

      <div className="absolute bottom-0 left-0 right-0  bg-gradient-to-r from-purple-500 to-pink-500 animate-gradient" />
    </div>
  );
}