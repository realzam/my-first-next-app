import ActiveLink from "./ActiveLink";
import styles from "./Navbar.module.css";

const Navbar = (): JSX.Element => {
  const menuItems = [
    {
      text: "Home",
      href: "/",
    },
    {
      text: "About",
      href: "/about",
    },
    {
      text: "Contact",
      href: "/contact",
    },
    {
      text: "Pricing",
      href: "/pricing",
    },
  ];
  return (
    <nav className={styles.menu}>
      {menuItems.map(({ href, text }) => (
        <ActiveLink key={href} href={href} text={text} />
      ))}
    </nav>
  );
};

export default Navbar;
