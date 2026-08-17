import { useContext, useRef } from "react";
import { ThemeContext } from "../context/ThemeContext";

function UncontrolledForm() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const { theme } = useContext(ThemeContext);
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Username:", usernameRef.current.value);
    console.log("Password:", passwordRef.current.value);

    usernameRef.current.value = "";
    passwordRef.current.value = "";
  }

  return (
    <div
      className={`rounded-2xl p-6 shadow-lg ${
        theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      {" "}
      <h2
        className={`text-xl font-bold ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
      >
        Uncontrolled Form
      </h2>
      <p
        className={`mt-1 text-sm ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Form values are accessed using useRef.
      </p>
      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            ref={usernameRef}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-medium text-white transition hover:bg-emerald-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
