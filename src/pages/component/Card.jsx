import React from "react";
import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="flex px-3 py-3">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-100"
          src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          alt="Sunset in the mountains"
        />
        <Link to={`/book/${book._id}`}>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{book.bookName}</div>
            <button></button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
