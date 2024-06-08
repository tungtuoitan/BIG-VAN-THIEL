import React, { ReactNode } from "react";
import Header from "@SRC/components/layout/Header";
import Footer from "@SRC/components/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
