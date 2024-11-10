"use client"
import { User, useUser } from '@/context/UserContext';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState, FormEvent } from 'react';
import NavbarComponent from '../front-navbar';

const SignupPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [hidden, setHidden] = useState(true);
  const [confHidden, setConfHidden] = useState(true);

  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    const data = {
      username: username,
      email: email,
      password: password
    }

    try {
      const response = await fetch("http://localhost:3000/api/signup", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
  
      const result = await response.json();

      console.log('Success:', result);
      router.push("/login");

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <NavbarComponent
        isLoggedIn={isLoggedIn}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <div className="w-full max-w-md space-y-6 bg-gray-900 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="username" className="block text-sm font-medium">Username</label>
            <input
              placeholder='Enter your username'
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium">Email</label>
            <input
              placeholder='Enter your email address'
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium">Password</label>
            <div className="relative">
                <input
                placeholder='Enter your password'
                type={hidden ? "password" : "text"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-yellow-500 focus:border-yellow-500"
                />
                <button className="absolute right-2 top-0 h-full p-2" onClick={()=>setHidden(!hidden)}>
                    {
                        hidden ? <EyeOff /> : <Eye />
                    }
                </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium">Confirm Password</label>
            <div className="relative">
                <input
                placeholder='Enter your password'
                type={confHidden ? "password" : "text"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-yellow-500 focus:border-yellow-500"
                />

                <button className="absolute right-2 top-0 h-full p-2" onClick={()=>setConfHidden(!confHidden)}>
                    {
                        confHidden ? <EyeOff /> : <Eye />
                    }
                </button>
            </div>
          </div>
          <button className='p-2 w-full bg-red-600 text-white rounded-lg 
          hover:bg-red-900'>Continue with Google</button>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-500 hover:bg-yellow-600 rounded-md text-white font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400">
          Already have an account?{' '}
          <Link href="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
