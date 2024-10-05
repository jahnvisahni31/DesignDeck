import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Page Not Found</p>
      <Link href="/" className="text-lg underline">
        Go back to Home
      </Link>
    </div>
  );
}
