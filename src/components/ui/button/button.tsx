type Props = {
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  children: React.ReactNode;
};
const Button = ({ className, variant = "primary", onClick, children }: Props) => {
  const variantClasses =
    variant === "primary"
      ? "bg-green-600 hover:bg-green-700  text-white"
      : "bg-white border hover:bg-gray-200 text-green-600";
  return (
    <button
      onClick={onClick}
      className={`${className} ${variantClasses} cursor-pointer text-sm md:text-base font-bold transition flex items-center justify-center gap-2 px-4 py-2 rounded-md`}
    >
      {children}
    </button>
  );
};

export default Button;
