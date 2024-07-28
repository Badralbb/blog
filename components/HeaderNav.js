import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import { IoIosMenu } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

const Navs = [
  { title: "Home", link: "#home" },
  { title: "Blog", link: "#blog" },
  { title: "Contact", link: "#contact" },
];
export const HeaderNav = () => {
  return (
    <div className="mb-12 text-[#1A1A1A] md:w-full w-[80%] mx-auto">
      <div className="max-w-[1130px] mx-auto py-8 w-full flex justify-between">
        <div className="flex gap-2 items-center">
          <Image
            src={"/images/Union.svg"}
            width={100}
            height={100}
            className="w-9 h-9"
          />
          <div className="flex items-center gap-1">
            <img src="images/Meta.svg" />
            <img src="images/Blog.svg" className="pt-1" />
          </div>
        </div>

        <div className="pl-6 hidden md:block">
          <div className="flex-1 hidden gap-10 w-full md:flex">
            {Navs.map((item, index) => (
              <div key={index}>{item.title}</div>
            ))}
          </div>
        </div>
        <div className="bg-[#F4F4F5] hidden items-center p-2 gap-3 rounded-md max-w-[166px] md:flex">
          <input
            placeholder="search"
            type="text"
            className="bg-[#F4F4F5] w-full"
          />
          <CiSearch className="" />
        </div>
        <div className="md:hidden">
          <IoIosMenu className="size-6" />
        </div>
      </div>
      <div className="md:max-w-[1216px] md:mx-auto hidden md:block">
        All Blog Post
      </div>
      <div className="md:hidden pl-8">Trending</div>
    </div>
  );
};
export function Footer() {
  return (
    <div>
      <div className="w-[75%] mx-auto border-t-[1px]">
        <div className="text-center py-[30px] flex flex-col gap-2 md:hidden">
          {Navs.map((item) => (
            <div key={item.link}>{item.title}</div>
          ))}
        </div>
        <div className="flex gap-[27px] py-[30px] justify-center">
          <CiFacebook />
          <FaInstagram />
          <CiTwitter />
        </div>
        <div className="flex gap-2.5 pb-[60px] justify-center">
          <Image src={"/images/Union.svg"} width={50} height={50} />
          <div>
            <div className="mb-0.5">MetaBlog</div>
            <div>© All Rights Reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
