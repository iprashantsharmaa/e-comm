import React from 'react';

export default function LoadingSkeleton() {
  return (
    <>
      {new Array(4).fill(null).map((__, index) => (
        <div
          /* eslint-disable-next-line react/no-array-index-key */
          key={index}
          className="flex flex-col items-center space-y-3 bg-white p-6 w-80"
        >
          <div className="animate-pulse bg-gray-200 w-4/5 px-1.5 py-3 rounded" />
          <div className="animate-pulse bg-gray-200 w-1/3 px-1.5 py-3 rounded" />
          <div className="animate-pulse h-80 w-72 bg-gray-200 mt-8 rounded" />
        </div>
      ))}
    </>
  );
}
