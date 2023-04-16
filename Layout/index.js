import React from "react";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

const Layout = ({ children, FooterSectionData1 }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer FooterSectionData1={FooterSectionData1} />
    </div>
  );
};

export default Layout;
