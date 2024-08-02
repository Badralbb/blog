import Image from "next/image";
import { CiSearch } from "react-icons/ci";

import { IoIosMenu } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import Link from "next/link";
import { useEffect, useState } from "react";
const items = [{ title: "Blog", link: "blog" }, { title: "Home", link: "/" }, { title: "Contact", link: "contact" }]

const Navs = [
  { title: "Home", link: "/" },
  { title: "Blog", link: "blog" },
  { title: "Contact", link: "contact" },
];


export const HeaderNav = () => {

  return (
    <div className="mb-12 text-[#1A1A1A] md:w-full w-[80%] mx-auto">
      <div className="max-w-[1130px] mx-auto py-8 w-full flex justify-between">
        <div className="flex gap-2 items-start">
          <Image
            src={"/images/Union.svg"}
            width={100}
            height={100}
            className="w-9 h-9"
          />
          <div className="flex items-center gap-1">
            <Image width={100} height={100} src="/images/Meta.svg" />
            <Image width={100} height={100} src="/images/Blog.svg" className="pt-1" />
          </div>
        </div>

        <div className="pl-6 hidden md:block">
          <div className="flex-1 hidden gap-10 w-full md:flex">
            {Navs.map((item, index) => (
              <Link href={item.link}>
                <div key={index}>{item.title}</div>

              </Link>
            ))}
          </div>
        </div>
        <div className="bg-[#F4F4F5] hidden items-center p-2 gap-3 rounded-md max-w-[166px] md:flex">
          <SearchComponent items={items} />

        </div>
        <div className="md:hidden">
          <IoIosMenu className="size-6" />
        </div>
      </div>

      <div className="md:hidden pl-8">Trending</div>
    </div>
  );
};
export function Footer() {
  const [value, setValue] = useState()
  async function art() {
    const response = await fetch("https://dev.to/api/articles?username=paul_freeman")
    const data = await response.json()
    const UpdatedArticles = await data
    setValue(UpdatedArticles)
  }
  useEffect(() => {
    art()
  }, [])
  if (!value) { return <div>faf</div> }

  return (
    <div className="md:bg-[#E8E8EA]  py-16">

      <div className="w-[75%] md:max-w-[1216px] md:w-full mx-auto border-t-[1px] md:border-none">
        <div className="md:flex gap-8">

          <div className="hidden md:block max-w-[289px] w-full">
            {
              <div>
                <div>{value[0].description}</div>

              </div>
            }
          </div>
          <div className="text-center md:max-w-[521px] md:w-full md:py-0 py-[30px] flex flex-col gap-2">
            {Navs.map((item) => (
              <div key={item.link}>{item.title}</div>
            ))}
          </div>
          <div className="flex gap-[27px] md:py-0 py-[30px] justify-center">
            <CiFacebook />
            <FaInstagram />
            <CiTwitter />
          </div>
        </div>

        <div className="flex justify-center md:justify-between mt-[25px] md:border-t-[1px] border-solid border-[#DCDDDF] md:py-5">
          <div className="flex gap-2.5 pb-[60px] justify-center">
            <Image src={"/images/Union.svg"} width={50} height={50} />
            <div>
              <div className="mb-0.5">MetaBlog</div>
              <div>© All Rights Reserved.</div>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
            <div>Cookie Policy</div>
          </div>
        </div>
      </div>
    </div>
  )
}

const SearchComponent = ({ items }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState(items)
  const handleChange = (event) => {
    const term = event.target.value
    setSearchTerm(term)


    console.log({ items })
    if (term !== "") {
      const filtered = items.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
      )
      setFilteredItems(filtered)
    } else {

      setFilteredItems(items)
    }
  }
  return (
    <div>
      <div className="flex items-center">
        <input
          placeholder="search"
          type="text"
          className="bg-[#F4F4F5] w-full" value={searchTerm} onChange={handleChange} />

        <CiSearch />
      </div>
      <div className="flex flex-col gap-3">
        {filteredItems.map((item, index) => (
          <Link href={item.link} key={index}>{item.title}</Link>
        ))}

      </div>
    </div>
  )
}