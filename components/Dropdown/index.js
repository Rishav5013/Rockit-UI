import React, { useState } from "react";
import ListItem from "@/elements/ListItems";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import Link from "next/link";

const Dropdown = ({ menuItem, data, isIcon, href, size }) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen(!open)}>
      <div
        className={`font-bold text-black-100 flex items-center cursor-pointer ${
          size == "sm" ? "text-sm" : size == "md" ? "text-md" : "text-xl"
        }`}
      >
        {!isIcon ? (
          <Link href={href}>{menuItem}</Link>
        ) : (
          <>
            <a className="pr-1">{menuItem}</a>
            {open ? (
              <AiFillCaretUp size="0.875em" color="#91979D" />
            ) : (
              <AiFillCaretDown size="0.875em" color="#91979D" />
            )}
          </>
        )}
      </div>
      {open ? (
        <ul className="z-10 font-medium text-black-100 flex flex-col absolute p-2 rounded-md shadow-xl">
          {data
            ? data.map((currElem) => {
                return <ListItem href={currElem.href} text={currElem.text} />;
              })
            : null}
        </ul>
      ) : null}
    </div>
  );
};
export default Dropdown;
