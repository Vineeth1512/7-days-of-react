import React, { useEffect, useRef } from "react";
import FormField from "./FormField";
function RegistrationForm({
  formData,
  setFormData,
  errors,
  setErrors,
  setSuccessMessage,
}) {
  const nameInputRef = useRef(null);
  useEffect(() => {
    console.log("Focus input field....", nameInputRef);

    nameInputRef.current.focus();
  }, []);

  function updateHobbiesHandle(e, index) {
    const updateHobbies = [...formData.hobbies];

    updateHobbies[index] = e.target.value;
    setFormData({ ...formData, hobbies: updateHobbies });
  }

  function addHobby() {
    setFormData({
      ...formData,
      hobbies: [...formData.hobbies, ""],
    });
  }

  function removeHobby(index) {
    const updateHobbies = formData.hobbies.filter(
      (_, hobbyIndex) => hobbyIndex !== index,
    );

    setFormData({ ...formData, hobbies: updateHobbies });
  }

  function handleSubmit(event) {
    console.log("Btn clicked...");

    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log("On submit clicked", formData);

    setSuccessMessage("Registration successful!");

    setFormData({
      name: "",
      email: "",
      age: "",
      hobbies: [""],
    });
  }

  function validateForm() {
    const newErrors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name ia Required..";
    }
    if (!formData.email.trim()) {
      newErrors.email = "EMail is Required..";
    } else if (!emailPattern.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.age) {
      newErrors.age = "Age is Required..";
    }

    return newErrors;
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl"
      >
        <h1 className="mb-6 text-center text-3xl font-bold text-slate-800">
          RegistrationForm
        </h1>
        <FormField label="Name">
          <input
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            ref={nameInputRef}
            type="text"
            placeholder="Enter your Name.."
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name} </p>
          )}
        </FormField>

        <FormField label="Email">
          <input
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            type="email"
            placeholder="Enter your Email.."
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email} </p>
          )}
        </FormField>
        <FormField label="Age">
          <input
            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            type="number"
            placeholder="Enter your Age.."
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />
          {errors.age && (
            <p className="mt-1 text-sm text-red-500">{errors.age} </p>
          )}
        </FormField>

        <h2 className="mb-3 text-lg font-semibold text-slate-700">Hobbies</h2>
        {formData.hobbies.map((hobby, index) => {
          return (
            <div key={index} className="mb-3 flex gap-2">
              <input
                className="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-blue-500"
                type="text"
                value={hobby}
                placeholder={`Hobby - ${index + 1}`}
                onChange={(e) => updateHobbiesHandle(e, index)}
              />
              <button
                className="rounded-lg bg-red-500 px-3 py-2 text-sm font-medium text-white hover:bg-red-600"
                type="button"
                onClick={() => removeHobby(index)}
              >
                Remove
              </button>
            </div>
          );
        })}

        <button
          className="mb-6 rounded-lg bg-slate-200 px-4 py-2 font-medium text-slate-700 hover:bg-slate-300"
          type="button"
          onClick={addHobby}
        >
          + Add Hobby
        </button>

        <br />
        <button
          className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default RegistrationForm;
