import React from "react";
import LogoIcon from "./icons/LogoIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SearchIcon from "./icons/SearchIcon";
import MenuIcon from "./icons/MenuIcon";
import TextA from "./buttons/TextA";
import IconButton from "./buttons/IconButton";

const Header: React.FC = () => {
  const isMobile = window.innerWidth < 1024;
  return (
    <header className="flex justify-center bg-black">
      <div className="w-full lg:w-[1360px] px-[22px] lg:px-24">
        <div className="w-full h-[72px] lg:h-[44px] p-4 lg:px-0  shadow-md flex justify-between text-white ">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
