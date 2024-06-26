import React from "react";
import LogoIcon from "@SRC/components/icons/LogoIcon";
import ProfileIcon from "@SRC/components/icons/ProfileIcon";
import ALinkHeader from "@SRC/components/buttons/ALinkHeader";
import ButtonIcon from "@SRC/components/buttons/ButtonIcon";
import CartIcon from "@SRC/components/icons/CartIcon";
import Menu from "@SRC/components/others/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@SRC/store/store";

const Header: React.FC = () => {
  const isLogged = useSelector((state: RootState) => state.profile.isLogged);
  return (
    <header className="flex justify-center bg-black">
      <div className="w-full lg:w-[1360px] px-[22px] lg:px-24 ">
        <div className="w-full h-[72px] p-4x lg:px-0  shadow-md flex justify-between text-white ">
          <div className="flex gap-8 items-center">
            <ButtonIcon icon={<LogoIcon />} hover={false} link="/" />
            <div className="container mx-auto justify-between items-center hidden lg:flex">
              <nav>
                <ul className="flex space-x-4 mb-1 gap-3">
                  <li>
                    <ALinkHeader title="All" link="/products/all" />
                  </li>
                  <li>
                    <ALinkHeader title="Men" link="/products/men" />
                  </li>
                  <li>
                    <ALinkHeader title="Woman" link="/products/woman" />
                  </li>
                  <li>
                    <ALinkHeader title="Kid" link="/products/kid" />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="flex gap-6 items-center">
            <ButtonIcon
              icon={<CartIcon />}
              link={isLogged ? "/cart" : "/login"}
            />
            <ButtonIcon
              icon={<ProfileIcon />}
              link={isLogged ? "/profile" : "/login"}
            />
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
