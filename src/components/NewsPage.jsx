import React from 'react';

const NewsPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Resident Evil News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
       
        <div className="border rounded-md overflow-hidden">
          <img src="image-url" alt="Resident Evil News" className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-lg font-semibold mb-2">News Title</h2>
            <p className="text-gray-700">News summary or description.</p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default NewsPage;
