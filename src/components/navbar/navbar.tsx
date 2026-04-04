import { NavbarLogo } from "./components/nav-logo";
import { NavbarMenu } from "./components/nav-menu";
import NavWhatsapp from "./components/nav-whatsapp";

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-s-0 w-full z-50 shadow-2xl py-4 bg-white">
      <div className="container flex items-center justify-between">
        <NavbarLogo />
        <NavbarMenu />
        <NavWhatsapp />
      </div>
    </header>
  );
};

export default Navbar;
 