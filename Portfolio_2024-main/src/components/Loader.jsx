import React from 'react';

// Array of quotes
const quotes = [
  "Time is what we want most, but what we use worst. - William Penn",
  "The two most powerful warriors are patience and time. - Leo Tolstoy",
  "Time flies over us, but leaves its shadow behind. - Nathaniel Hawthorne",
  "Lost time is never found again. - Benjamin Franklin",
  "Time is a created thing. To say 'I don't have time,' is like saying, 'I don't want to.' - Lao Tzu",
  "The secret of success is to be ready when your opportunity comes. - Benjamin Disraeli",
  "Patience is not simply the ability to wait - it's how we behave while we're waiting. - Joyce Meyer",
  "You may delay, but time will not. - Benjamin Franklin",
  "Time is the wisest counselor of all. - Pericles",
  "Time is money. - Benjamin Franklin",
  "Time discovers truth. – Seneca",
  "Patience is the key to paradise. – Turkish Proverb",
  "Long-term consistency trumps short-term intensity. – Bruce Lee",
  "Consistency is the hallmark of greatness."
];

const CubeLoader = () => {
  // Get a random quote from the array
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {/* Loader Component */}
      <div className="w-16 h-16 bg-blue-500 animate-spin rounded-md" style={{ animation: 'spin 1s linear infinite' }}></div>
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }
      `}</style>

      {/* Quote Component */}
      <p className="mt-6 text-lg md:text-xl font-semibold text-gray-700 dark:text-gray-200 text-center">
        {randomQuote}
      </p>
    </div>
  );
};

export default CubeLoader;
