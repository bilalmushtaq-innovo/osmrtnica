// import NavLinks from "./nav-links";
// import { ThemeToggle } from "@/components/theme-toggle";
import userIcon from "@/assets/user-icon.svg";
import mainLogo from "@/assets/main-logo.svg";
import menuIcon from "@/assets/menu-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="drop-shadow-md top-0 w-full flex items-center justify-between p-12 h-20 z-10 border-b">
      <Link to="/auth">
        <img src={userIcon} alt="user" />
      </Link>
      <Link to="/">
        <img src={mainLogo} alt="logo" />
      </Link>
      <div className="flex items-center justify-center gap-4">
        {/* <NavLinks /> */}
        <Link to="/">
          <img src={menuIcon} alt="menu-icon" />
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
