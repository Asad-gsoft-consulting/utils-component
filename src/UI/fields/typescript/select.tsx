import React from "react";

interface SelectInputProps<T> {
  options: Array<{ key: T; label: string }>;
  placeholder?: string;
  value: T | null;
  onChange: (value: T) => void;
  customStyles?: React.CSSProperties;
  className?: string;
  label?: string;
}

const SelectInput = <T extends string | number>({
  options,
  placeholder = "Select an option",
  value,
  onChange,
  customStyles = {},
  className = "",
  label,
}: SelectInputProps<T>) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // Convert the value back to number if T is number
    const newValue = (
      typeof options[0].key === "number"
        ? Number(event.target.value)
        : event.target.value
    ) as T;
    onChange(newValue);
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="mb-1 block text-sm text-gray-600">{label}</label>
      )}
      <select
        value={value ?? ""}
        onChange={handleChange}
        className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 bg-white"
        style={{
          height: "50px",
          fontSize: "14px",
          ...customStyles,
        }}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option
            key={option.key}
            value={option.key}
            className="text-gray-800 py-2"
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
