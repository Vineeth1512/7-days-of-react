import React, { useState } from "react";

function UserCard({ user }) {
  const [showDetails, setShowDetails] = useState(false);

  function toggleDetails() {
    setShowDetails((prevState) => !prevState);
  }
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <h1 className="mb-2 font-bold text-xl text-gray-800">
        {user.id}.{user.name}
      </h1>
      <p className="mb-2 text-gray-600"> Email : {user.email}</p>
      <p className="text-gray-600 mb-4"> City : {user.address.city}</p>

      <button
        onClick={toggleDetails}
        className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {showDetails && (
        <div className="mt-5 border-t border-gray-200 pt-4">
          <p className="mb-2 text-gray-600">
            📞 <span className="font-medium">Phone:</span> {user.phone}
          </p>

          <p className="text-gray-600">
            🌐 <span className="font-medium">Website:</span> {user.website}
          </p>
        </div>
      )}
    </div>
  );
}

export default UserCard;
