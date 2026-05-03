import React from 'react';
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center px-6">
      
      <div className="text-center max-w-xl">
        
        {/* Error Code */}
        <h1 className="text-8xl md:text-9xl font-bold text-green-700 drop-shadow-md">
          404
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 text-lg">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          
          <Link to="/">
            <button className="btn bg-green-700 text-white border-none hover:bg-green-800 px-8">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8"
          >
            Go Back
          </button>

        </div>

        {/* Bottom Text */}
        <p className="mt-10 text-sm text-gray-400">
          KeenKeeper © 2026
        </p>

      </div>
    </div>
  );
};

export default Error;