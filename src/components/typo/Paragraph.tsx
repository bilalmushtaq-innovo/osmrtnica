import { HTMLParagraphElementProps } from "@/types/globals";

const Paragraph = ({
  children,
  className,
  ...props
}: HTMLParagraphElementProps) => {
  return (
    <p
      className={`text-xl text-[#414141] ${className}`}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
