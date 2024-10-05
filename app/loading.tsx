// components/Loading.tsx

import React from 'react';

const Loading: React.FC = () => {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-100 z-50">
      <div className="animate-spin h-12 w-12 border-t-4 border-red-600 rounded-full" />
    </main>
  );
};

export default Loading;
