import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    hobbies: [""],
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6">
      {" "}
      {successMessage && <p className="text-green-500">{successMessage}</p>}
      <RegistrationForm
        formData={formData}
        setFormData={setFormData}
        errors={errors}
        setErrors={setErrors}
        setSuccessMessage={setSuccessMessage}
      />
    </div>
  );
}

export default App;
