import NavLinkItem from "./nav-link-item";

const itemsArray = [
  {
    title: "ItemOne",
    redirect: "/auth",
  },
  {
    title: "ItemTwo",
    redirect: "#",
  },
];

const NavLinks = () => {
  return (
    <ul className="flex items-center justify-between gap-4">
      {itemsArray.map((item, index) => {
        return <NavLinkItem key={index} {...item} />;
      })}
    </ul>
  );
};

export default NavLinks;
