import React, { useState, useEffect } from "react";
import Drawer from "react-modern-drawer";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.jpg";
import { myLoader } from "../../utils/all";
import { BsBag } from "react-icons/bs";
import { useRouter } from "next/router";
import Hamburger from "hamburger-react";
import "react-modern-drawer/dist/index.css";


const MobileDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const router = useRouter(null);
  useEffect(() => {
    setIsOpen(false);
  }, [router]);
  return (
    <div className="block md:hidden">
      <div className="flex justify-between items-center pl-2 py-6 pr-4">
        <Hamburger toggled={isOpen} toggle={toggleDrawer} size="26" />
        <Link href={`/`}>
          <Image
            src={Logo}
            alt="Landscape picture"
            width={54}
            height={76}
            loader={myLoader}
          />
        </Link>
        <span>
          <BsBag className="text-2xl" />
        </span>
      </div>
      <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
        <div className="w-full h-full px-5 py-10 bg-primary">
          <Link href={`/`}>
            <a>
              <Image
                src={Logo}
                alt="Landscape picture"
                width={70}
                height={101}
                loader={myLoader}
              />
            </a>
          </Link>
          <ul className="flex flex-col px-4 mt-8 gap-y-7">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id}>
                  <Link href={url}>
                    <a className="text-black uppercase">{text}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileDrawer;

const links = [
  { id: 1, text: "Original Artwork", url: "/original-artwork" },
  { id: 2, text: "Shop", url: "/shop" },
  { id: 3, text: "Contact", url: "/contact-us" },
  { id: 4, text: "About ", url: "/about " },
];
