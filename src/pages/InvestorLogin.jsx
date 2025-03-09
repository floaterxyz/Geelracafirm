
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function InvestorLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would validate credentials with your backend
    console.log('Login attempted with:', credentials);
    
    // For demo purposes, redirect to investor dashboard
    window.location.href = '/investor-dashboard';
  };

  return (
    <div className="section-container max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-4">Investor Login</h1>
        <p className="text-gray-600">
          Access your investor dashboard to review and vote on funding applications.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-geelraca-green"
            required
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-geelraca-green focus:ring-geelraca-green border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <div className="text-sm">
            <Link to="/forgot-password" className="text-geelraca-green hover:underline">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-geelraca-green text-white px-4 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}
