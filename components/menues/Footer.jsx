import Link from "next/link";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-8 pb-[75px]">
      <div className="main-container">
        <div className="flex md:flex-row flex-col gap-y-8">
          <div className="flex-1 md:order-none order-last flex md:justify-center">
            <div className="flex-1 flex items-end">
              <div className="flex flex-col gap-y-4 mb-4">
                <Link href={`/`}>
                  <a> © Elizabeth Waggett 2021</a>
                </Link>
              </div>
            </div>
            <div className="flex-col flex">
              <ul className="flex gap-x-4 mb-8">
                {social.map((icons) => {
                  const { id, icon, url } = icons;
                  return (
                    <li key={id} className="">
                      <a
                        className="w-10 h-10 rounded-full bg-white hover:bg-secondry  transition-all duration-300 ease-in-out flex justify-center items-center"
                        href={url}
                      >
                        <div className="text-2xl">{icon}</div>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const social = [
  { id: 1, icon: <FaFacebookF />, url: "facebook" },
  { id: 2, icon: <BsInstagram />, url: "insta" },
];
