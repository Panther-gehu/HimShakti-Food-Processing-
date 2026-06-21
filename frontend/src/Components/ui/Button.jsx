/**
 * Button Component
 * Props:
 * variant: primary | secondary | outline
 * size: sm | md | lg
 * disabled: boolean
 * onClick: function
 */

function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  onClick,
}) {
  const variants = {
    primary: "bg-green-700 text-white hover:bg-green-800",
    secondary: "bg-gray-700 text-white hover:bg-gray-800",
    outline: "border border-green-700 text-green-700 hover:bg-green-50",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-7 py-3 text-lg",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variants[variant]} ${sizes[size]} rounded-lg transition disabled:opacity-50`}
    >
      {children}
    </button>
  );
}

export default Button;