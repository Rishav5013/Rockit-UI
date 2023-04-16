import React from "react";
import Dropdown from "@/components/Dropdown";
import { data1, data2, data3, data4 } from "./data";

const Menu = ({ hamburger }) => {
  return (
    <>
      {hamburger ? (
        <>
          <Dropdown
            menuItem="What we do"
            href="https://www.youtube.com"
            size="xl"
          />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
          <Dropdown
            menuItem="Our Work"
            href="https://www.youtube.com"
            size="xl"
          />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
          <Dropdown
            menuItem="Solutions"
            href="https://www.youtube.com"
            size="xl"
          />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
          <Dropdown
            menuItem="Services"
            href="https://www.youtube.com"
            size="xl"
          />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
          <Dropdown
            menuItem="Hire Us"
            href="https://www.youtube.com"
            size="xl"
          />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
          <Dropdown menuItem="More" href="https://www.youtube.com" size="xl" />
          <div className="border border-gray-500 lg:mt-[70px] lg:mb-[90px]"></div>
        </>
      ) : (
        <>
          <Dropdown menuItem="What we do" data={data1} isIcon size="xl" />
          <Dropdown
            menuItem="Our Work"
            href="https://www.youtube.com"
            size="xl"
          />
          <Dropdown menuItem="Solutions" data={data2} isIcon size="xl" />
          <Dropdown menuItem="Services" data={data3} isIcon size="xl" />
          <Dropdown menuItem="Hire Us" data={data3} isIcon size="xl" />
          <Dropdown menuItem="More" data={data4} isIcon size="xl" />
        </>
      )}
    </>
  );
};

export default Menu;
