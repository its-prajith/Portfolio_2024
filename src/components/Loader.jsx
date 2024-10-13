import React from 'react';

const LoaderWithQuote = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Loader Component */}
      <div
        className="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-pink-400 via-purple-400 to-indigo-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full"
      >
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
      </div>
      
      {/* Quote Component */}
      <p className="mt-6 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
        "Good things come to those who wait, but better things come to those who are patient."
      </p>
    </div>
  );
};

export default LoaderWithQuote;
