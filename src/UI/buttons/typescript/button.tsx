import React, { ButtonHTMLAttributes } from "react";
import { FaSpinner } from "react-icons/fa";
import clsx from "clsx";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  loading?: boolean;
  iconClassName?: string;
  buttonClassName?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(
  (
    {
      children,
      icon,
      loading = false,
      buttonClassName = "",
      iconClassName = "",
      onClick,
      disabled,
      type = "button",
      className = "",
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        onClick={onClick}
        disabled={disabled || loading}
        className={clsx(
          "flex w-full items-center justify-center rounded-md border border-gray-300 bg-[#3DA2FF] px-4 py-6 font-normal text-white transition-colors duration-200",
          "hover:bg-[#2b8fe6] disabled:cursor-not-allowed disabled:opacity-60",
          "md:rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
          buttonClassName,
          className
        )}
        {...rest}
      >
        {icon && <span className={clsx("mr-2", iconClassName)}>{icon}</span>}

        <span className={loading ? "mr-2" : ""}>{children}</span>

        {loading && (
          <FaSpinner
            className={clsx("animate-spin", iconClassName)}
            aria-hidden="true"
          />
        )}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
