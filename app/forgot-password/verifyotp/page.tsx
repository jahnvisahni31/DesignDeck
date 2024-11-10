"use client"
import { useUser } from '@/context/UserContext';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, useState, FormEvent, useEffect } from 'react';
import { User } from '@/context/UserContext';
import NavbarComponent from '../../front-navbar';

const LoginPage: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [otp, setOtp] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const router = useRouter();

  const searchParams = useSearchParams();
    
  const id = searchParams.get("id");


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setEmailError(null);

    const data = {
      otp: otp,
      id: id
    };

    try {
      const response = await fetch("http://localhost:3000/api/verifyotp", {
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

      if(result.success){
          console.log('Success:', result);
          router.push(`/forgot-password/resetpassword?id=${id}`);
      }
      

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
        <h2 className="text-3xl font-bold mb-6 text-center">OTP Verification</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">OTP</label>
            <input
             placeholder='Enter OTP received on email address'
              type="text"
              id="otp"
              name="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="mt-1 w-full p-2 rounded-md bg-gray-800 border border-gray-700 focus:ring-purple-500 focus:border-purple-500"
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 bg-purple-500 hover:bg-purple-600 rounded-md text-white font-semibold transition duration-300"
          >
            Verify OTP
          </button>
        </form>

      </div>
    </div>
  );
};

export default LoginPage;
