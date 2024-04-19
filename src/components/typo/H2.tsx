import { HTMLHeadingElementProps } from "@/types/globals";

const H2 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
    <div
      className={`scroll-m-20 text-[32px] text-[#1E2125] font-normal ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default H2;
