import React from "react";

const DirectoryTree: React.FC = () => {
  return (
    <div className="mt-8 mb-4 lg:px-0">
      <a href="/" className="text-blue-500 hover:text-bold ">
        Home
      </a>
      <span className="mx-1 font-gray-600">/</span>
      <span className="mx-1 font-gray-600">All Products</span>
    </div>
  );
};

export default DirectoryTree;
