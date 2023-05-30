import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.jpg";
import { myLoader } from "../../utils/all";

const Nav = () => {
  return (
    <div className=" hidden md:flex py-4 main-container ">
      <div className="flex items-center justify-between w-full">
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
        <ul className="flex gap-x-7">
          {links.map((link) => {
            const { id, text, url } = link;
            return (
              <li key={id}>
                <Link href={url}>
                  <a className="text-sm text-black uppercase transition-all duration-300 ease-in-out hover:text-secondry">
                    {text}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Nav;

const links = [
  { id: 1, text: "Original Artwork", url: "/original-artwork" },
  { id: 2, text: "Shop", url: "/shop" },
  { id: 3, text: "Contact", url: "/contact-us" },
  { id: 4, text: "About ", url: "/about " },
];
