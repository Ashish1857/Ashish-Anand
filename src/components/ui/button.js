import clsx from "clsx";

export const Button = ({
  children,
  className = "",
  variant = "primary",
  onClick,
  type = "button",
}) => {
  const baseStyles =
    "px-4 py-2 rounded-full font-medium transition duration-200 text-sm";

  const variants = {
    primary: "bg-white text-black hover:bg-gray-100",
    outline:
      "border border-white text-white hover:bg-white hover:text-black",
    ghost: "text-white hover:text-gray-300",
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
