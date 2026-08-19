import { useEffect, useState } from "react";
import "./index.css";
import UserCard from "./components/UserCard";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetchUsers();
    async function fetchUsers() {
      try {
        setLoading(true);
        setError("");
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch users");
        }
        const data = await response.json();
        console.log("Data :", data);

        setUsers(data.slice(0, 5));
      } catch (error) {
        setError("Failed to fetch users.", error.message);
      } finally {
        setLoading(false);
      }
    }
  }, []);

  async function loadMoreUsers() {
    try {
      setLoadingMore(true);
      setError("");
      const response = await axios.get(url);
      const nextUsers = response.data.slice(5, 10);
      console.log("Load More Users ", nextUsers);
      setUsers((prevUsers) => [...prevUsers, ...nextUsers]);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingMore(false);
    }
  }
  const filterdUsers = users.filter((user) => {
    const name = user.name.toLowerCase();
    const email = user.email.toLowerCase();
    const search = searchTerm.toLocaleLowerCase();
    return name.includes(search) || email.includes(search);
  });

  return (
    <div className="min-h-screen bg-gray-100 px-5 py-10">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
          User Directory
        </h1>

        {/* Search */}
        <div className="mb-8 flex justify-center">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search Users..."
            className="w-full max-w-xl rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        {error && (
          <p className="mb-6 rounded-lg bg-red-100 p-4 text-center font-medium text-red-600">
            {error}
          </p>
        )}

        {loading && (
          <p className="py-10 text-center text-lg font-medium text-indigo-600">
            Loading users...
          </p>
        )}

        {/* Users */}
        {!loading && (
          <div className="space-y-5">
            {filterdUsers.map((user) => {
              return <UserCard key={user.id} user={user}></UserCard>;
            })}
          </div>
        )}

        {!loading && !error && users.length < 10 && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMoreUsers}
              disabled={loadingMore}
              className="rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-md transition hover:bg-indigo-700"
            >
              {loadingMore ? "Loading..." : "Load More Users"}
            </button>
          </div>
        )}

        {!loading && users.length === 10 && (
          <p className="mt-8 text-center font-medium text-gray-500">
            All users loaded 🎉
          </p>
        )}

        {/* Load More */}
      </div>
    </div>
  );
}

export default App;
