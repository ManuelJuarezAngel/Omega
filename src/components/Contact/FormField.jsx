import React from "react";

const renderIcon = (type) => {
  switch (type) {
    case "user":
      return (
        <svg className="h-[1em] opacity-50 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 1.79-8 4v2h16v-2c0-2.21-3.58-4-8-4Z" />
        </svg>
      );
    case "mail":
      return (
        <svg className="h-[1em] opacity-50 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor">
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </g>
        </svg>
      );
    case "subject":
      return (
        <svg className="h-[1em] opacity-50 mb-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M4 6h16v2H4zm0 5h10v2H4zm0 5h7v2H4z" />
        </svg>
      );
    default:
      return null;
  }
};

function FormField({ field }) {
  return (
    <label className="input validator w-full">
      {renderIcon(field.icon)}

      {field.type === "textarea" ? (
        <textarea
          placeholder={field.placeholder}
          required
          className="h-32 resize-none"
        />
      ) : (
        <input type={field.type} placeholder={field.placeholder} required />
      )}
    </label>
  );
}
export default FormField;
