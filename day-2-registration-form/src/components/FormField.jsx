import React from "react";

function FormField({ label, children }) {
  return (
    <div className="mb-5">
      <label className="mb-2 block font-medium text-slate-700">{label}</label>
      {children}
    </div>
  );
}
export default FormField;
