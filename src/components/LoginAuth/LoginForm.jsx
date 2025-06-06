import React from 'react';
import { Lock, Mail } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') || 'student'; // Default to 'student' if not provided

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md space-y-6 bg-white p-6 rounded-lg shadow-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome Back - {role === 'student' ? 'Student' : 'Educator'}
          </h2>
          <p className="mt-2 text-gray-600">Login to your {role} account</p>
        </div>
        <form className="space-y-4">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="example: jane@doe.com"
                className="pl-10 block w-full rounded-lg border border-gray-300 py-3 px-4 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="pl-10 block w-full rounded-lg border border-gray-300 py-3 px-4 placeholder-gray-400 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Login
          </button>

          {/* Link to Signup Page */}
          <div className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{' '}
            <Link
              to={`/signup?role=${role}`}
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign Up here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
