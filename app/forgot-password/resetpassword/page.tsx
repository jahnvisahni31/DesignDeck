"use client"
import { useUser } from '@/context/UserContext';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useState, FormEvent, useEffect } from 'react';
import { User } from '@/context/UserContext';
import NavbarComponent from '../../front-navbar';
import { useSearchParams } from 'next/navigation';

const LoginPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [hidden, setHidden] = useState(true);

  const router = useRouter();

  const searchParams = useSearchParams()

  const id = searchParams.get("id");
  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const data = {
      id: id,
      password: password
    };

    try {
      const response = await fetch("http://localhost:3000/api/resetpassword", {
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
        <h2 className="text-3xl font-bold mb-6 text-center">Reset Password</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full h-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-purple-500 focus:border-purple-500"
              />
              <button className="absolute right-2 top-0 h-full p-2" type="button" onClick={() => setHidden(!hidden)}>
                {hidden ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-purple-500 hover:bg-purple-600 rounded-md text-white font-semibold transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
