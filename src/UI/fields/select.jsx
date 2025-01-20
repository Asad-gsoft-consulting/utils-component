import React from "react";

const SelectInput = ({
  label,
  options,
  placeholder = "Select an option",
  value,
  onChange,
  customStyles = {},
  className = "",
}) => {
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    // Only call onChange if a non-placeholder option is selected
    if (selectedValue !== "") {
      onChange(selectedValue);
    }
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1 block text-sm text-white">{label}</label>
      )}
      <select
        value={value || ""}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        style={{
          height: "45px",
          fontSize: "14px",
          appearance: "auto",
          ...customStyles,
        }}
      >
        {/* Placeholder option */}
        <option value="" disabled>
          {placeholder}
        </option>

        {/* Map through options */}
        {options.map((option) => (
          <option key={option.key} value={option.key} className="text-gray-800">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
