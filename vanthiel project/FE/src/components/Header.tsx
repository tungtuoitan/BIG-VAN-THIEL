import React from "react";
import LogoIcon from "./icons/LogoIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SearchIcon from "./icons/SearchIcon";
import MenuIcon from "./icons/MenuIcon";
import TextA from "./buttons/TextA";
import IconButton from "./buttons/IconButton";

const Header: React.FC = () => {
  const isMobile = window.innerWidth < 1024 
  return (
    <header className="bg-black text-white p-4 shadow-md flex justify-between h-[72px] lg:h-[44px] lg:px-24 xl:px-48 xl:px-72">
      <div className="flex gap-8 items-center">
        <IconButton icon={<LogoIcon />} link="/" />
        <div className="container mx-auto justify-between items-center hidden lg:flex">
          <nav>
            <ul className="flex space-x-4 mb-1 gap-3">
              <li>
                <TextA title="All Products" link="/products" />
              </li>
              <li>
                <TextA title="Men" link="/men" />
              </li>
              <li>
                <TextA title="Woman" link="/woman" />
              </li>
              <li>
                <TextA title="Cart" link="/cart" />
              </li>
              <li>
                <TextA title="Support" link="/support" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <IconButton icon={<SearchIcon />} link="/" />
        <IconButton icon={<ProfileIcon />} link="/" />
        {isMobile ? <IconButton icon={<MenuIcon />} link="/" /> : null}
      </div>
    </header>
  );
};

export default Header;
