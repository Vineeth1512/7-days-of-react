import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const user = {
    name: "ajay",
    age: 25,
    location: "Hyderabad",
    avatar: "https://www.w3schools.com/w3images/avatar_hat.jpg",
  };

  const [isVisible, setIsVIsible] = useState(true);

  function toggleProfile() {
    setIsVIsible((preValue) => !preValue);
  }

  console.log("IsVIsible , ", isVisible);

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      <button
        className="mb-6 rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow hover:bg-blue-600 transition"
        onClick={toggleProfile}
      >
        {isVisible ? "Hide Profile " : "Show Profile"}
      </button>
      {isVisible && (
        <UserCard
          name={user.name}
          age={user.age}
          location={user.location}
          avatar={user.avatar}
        />
      )}
    </div>
  );
}

export default App;
