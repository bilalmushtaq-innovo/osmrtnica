import { HTMLHeadingElementProps } from "@/types/globals";

const H3 = ({ children, className, ...props }: HTMLHeadingElementProps) => {
  return (
    <div
      className={`scroll-m-20 text-2xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default H3;
