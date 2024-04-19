import { HTMLDivElementProps } from "@/types/globals";

const Large = ({ children, className, ...props }: HTMLDivElementProps) => {
  return (
    <div className={` text-[16px] text-[#414141] ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Large;
