import { Link } from "react-router-dom";

type NavLinkItemProps = { title: string; redirect: string };

const NavLinkItem = ({ title, redirect }: NavLinkItemProps) => {

  return (
    <Link to={redirect} className="flex items-center justify-center gap-2">
      <span>{title}</span>
    </Link>
  );
};

export default NavLinkItem;
