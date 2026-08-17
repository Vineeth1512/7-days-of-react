import { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const { theme } = useContext(ThemeContext);
  function handleSubmit(event) {
    event.preventDefault();

    console.log("Controlled Form:", formData);

    setFormData({
      name: "",
      email: "",
    });
  }

  return (
    <div
      className={`rounded-2xl ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"} p-6 shadow-lg`}
    >
      <h2
        className={`text-xl font-bold ${theme === "light" ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}
      >
        Controlled Form
      </h2>

      <p
        className={`mt-1 text-sm ${
          theme === "light" ? "text-gray-500" : "text-gray-400"
        }`}
      >
        Form values are controlled by React state.
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                name: event.target.value,
              })
            }
            className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-900"
                : "border-gray-700 bg-gray-800 text-white"
            }`}
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(event) =>
              setFormData({
                ...formData,
                email: event.target.value,
              })
            }
            className={`w-full rounded-lg border px-4 py-2 outline-none transition ${
              theme === "light"
                ? "border-gray-300 bg-white text-gray-900"
                : "border-gray-700 bg-gray-800 text-white"
            }`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white transition hover:bg-indigo-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
