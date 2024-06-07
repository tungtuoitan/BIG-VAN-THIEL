import React from "react";
import VisaIcon from "./icons/VisaIcon";
import MasterCardIcon from "./icons/MasterCardIcon";
import PaypalIcon from "./icons/PaypalIcon";

const Footer: React.FC = () => {
  return (
    <footer
      className="flex justify-center bg-gray-200 mt-8"
      style={{ borderTop: "1px solid #ddd" }}
    >
      <div className="px-[22px] lg:w-[1360px] lg:px-24 flex flex-col gap-4 md:flex-row justify-between items-align py-4">
        <div className="inline-flex direction-row gap-2 justify-between">
          <VisaIcon />
          <MasterCardIcon />
          <PaypalIcon />
        </div>
        <p className="text-sm">© 2024 Van Thiel. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
