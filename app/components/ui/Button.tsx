import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "solid" | "outline";
  href?: string;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "solid",
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "px-8 py-3.5 text-sm font-bold rounded-full transition-all duration-200 inline-flex items-center justify-center";

  const variants = {
    solid: "bg-[#003631] text-white hover:bg-[#004d46] shadow-sm",
    outline: "border border-[#003631] text-[#003631] hover:bg-[#003631]/5",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
