import React from "react";

function UserCard({ name, age, location, avatar }) {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-xl">
      <img
        src={avatar}
        alt={name}
        className="mx-auto mb-4 h-28 w-28 rounded-full object-cover"
      />

      <h1 className="text-2xl font-bold text-slate-800">{name}</h1>

      <p className="mt-2 text-slate-500">{location}</p>

      <p className="mt-2 text-slate-600">Age: {age}</p>
    </div>
  );
}

export default UserCard;
