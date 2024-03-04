import { navLinks } from "../assets/constants";
import { profile } from "../assets/images";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a
          href="https://www.instagram.com/aqerke_erkin/"
          className="flex justify-center items-center gap-4 lg:px-4 lg:py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl max-lg:rounded-full shadow-lg"
        >
          <img src={profile} alt="profile" className="rounded-full w-12 h-12" />
          <div className="flex flex-col max-lg:hidden">
            <h1 className="font-montserrat font-bold leading-4 text-white">
              aqerke_erkin
            </h1>
            <p className="font-palanquin text-slate-300">Akerke Yerkin</p>
          </div>
        </a>
        <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="humbur" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
