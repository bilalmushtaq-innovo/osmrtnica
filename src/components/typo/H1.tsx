import { HTMLHeadingElementProps } from "@/types/globals";

const H1 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
    <div
      className={`scroll-m-20 text-[40px] font-normal text-[#1E2125] tracking-tight ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default H1;
