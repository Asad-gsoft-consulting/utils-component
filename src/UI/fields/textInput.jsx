import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const TextInput = React.forwardRef(
  (
    {
      value,
      label,
      onChange,
      className = "",
      iconClassName = "",
      placeholder = "",
      type = "text",
      icon,
      trailingText1,
      trailingText2,
      onTrailingText1Click,
      onTrailingText2Click,
      accept,
      ...rest
    },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleTogglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };

    return (
      <div className="relative">
        {label && (
          <label className="mb-1 block text-sm text-white">{label}</label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={type === "password" && isPasswordVisible ? "text" : type}
            value={value}
            accept={accept}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 ${className}`}
            {...rest}
          />

          {type === "password" && (
            <button
              type="button"
              onClick={handleTogglePasswordVisibility}
              className={`absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer ${iconClassName}`}
            >
              {isPasswordVisible ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </button>
          )}

          {icon && !type === "password" && (
            <img
              src={icon}
              alt="icon"
              className={`absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 ${iconClassName}`}
            />
          )}
        </div>

        <div className="absolute right-0 top-0 flex gap-2">
          {trailingText1 && (
            <span
              className="cursor-pointer px-2 text-xs text-blue-500 hover:text-blue-600"
              onClick={onTrailingText1Click}
            >
              {trailingText1}
            </span>
          )}

          {trailingText2 && (
            <span
              className="cursor-pointer px-2 text-xs text-blue-500 hover:text-blue-600"
              onClick={onTrailingText2Click}
            >
              {trailingText2}
            </span>
          )}
        </div>
      </div>
    );
  }
);

TextInput.displayName = "TextInput";

export default TextInput;
