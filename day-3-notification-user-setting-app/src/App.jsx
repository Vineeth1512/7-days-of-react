import { useContext, useEffect, useState } from "react";

import { ThemeContext } from "./context/ThemeContext";

import ThemeToggle from "./components/ThemeToggle";
import NotificationModal from "./components/NotificationModal";
import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import CrashComponent from "./components/CrashComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  const { theme } = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldCrash, setShouldCrash] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return;
    }

    console.log("Notification modal opened");

    const timer = setTimeout(() => {
      setIsModalOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpen]);

  return (
    <div
      className={`min-h-screen px-4 py-10 transition-colors duration-300 ${
        theme === "light"
          ? "bg-gray-100 text-gray-900"
          : "bg-gray-950 text-white"
      }`}
    >
      <div className="mx-auto max-w-4xl">
        <h1 className="text-center text-3xl font-bold sm:text-4xl">
          Notification & User Settings
        </h1>

        <p
          className={`mt-2 text-center ${
            theme === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          Practice React Context, Portals, Forms and Error Boundaries
        </p>

        <div
          className={`mt-8 rounded-2xl p-6 shadow-lg ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          }`}
        >
          <ThemeToggle />
        </div>

        <div
          className={`mt-6 rounded-2xl p-6 text-center shadow-lg ${
            theme === "light" ? "bg-white" : "bg-gray-900"
          }`}
        >
          <h2 className="text-xl font-bold">Notifications</h2>

          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-4 rounded-lg bg-indigo-600 px-6 py-2 font-medium text-white transition hover:bg-indigo-700"
          >
            Show Notification
          </button>
        </div>

        {isModalOpen && (
          <NotificationModal onClose={() => setIsModalOpen(false)} />
        )}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <ControlledForm />

          <UncontrolledForm />
        </div>

        <div className="mt-6 rounded-2xl bg-white p-6 shadow-lg">
          <h2 className="text-center text-xl font-bold text-gray-900">
            Error Boundary
          </h2>

          <ErrorBoundary onRetry={() => setShouldCrash(false)}>
            <CrashComponent shouldCrash={shouldCrash} />
          </ErrorBoundary>

          {!shouldCrash && (
            <button
              onClick={() => setShouldCrash(true)}
              className="mt-5 w-full rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700"
            >
              Crash App
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
