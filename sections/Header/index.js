import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import Button from "@/components/Button";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="flex items-center justify-between py-6 container mx-auto ">
        <Link href="/" className="hidden lg:block">
          <Image
            src="/images/rockit_logo.svg"
            alt="logo image"
            height={45}
            width={135}
          />
        </Link>

        <ul className="lg:flex items-center justify-between font-mulish font-bold w-6/12 hidden">
          <Menu />
        </ul>

        <section className="flex lg:hidden">
          <div onClick={() => setOpen((open) => !open)} className="pt-4 pl-5">
            <HiOutlineMenu />
          </div>

          <div className={open ? "openMenu" : "closeMenu"}>
            <div
              className="absolute top-10 left-5"
              onClick={() => setOpen(false)}
            >
              <HiOutlineX />
            </div>
            <div className="absolute left-10 flex flex-col items-left justify-between min-h-[250px]">
              <Menu hamburger />
            </div>
          </div>
        </section>

        <div className="hidden lg:block">
          <Button size="md" type="secondary" href="https://www.google.com">
            Let's Talk
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Header;
