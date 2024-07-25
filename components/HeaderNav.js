import Image from "next/image"
import { CiSearch } from "react-icons/ci";
import { IoMenu } from "react-icons/io5";

const Navs = ["Home", "Blog", "Contact"]
export const HeaderNav = () => {
    return (
        <div className="mb-12">

            <div className="max-w-[1130px] mx-auto py-8 w-full flex justify-between">
                <div className="flex gap-2 items-center">
                    <Image src={"/images/Union.svg"} width={100} height={100} className="w-9 h-9" />
                    <div className="flex items-center gap-1">

                        <img src="images/Meta.svg" />
                        <img src="images/Blog.svg" className="pt-1" />
                    </div>
                </div>

                <div className="pl-6">

                    <div className="flex-1 hidden gap-10 w-full md:flex">
                        {
                            Navs.map((item, index) => (
                                <div key={index}>
                                    {item}
                                </div>
                            ))


                        }
                    </div>

                </div>
                <div className="bg-[#F4F4F5] hidden items-center p-2 gap-3 rounded-md max-w-[166px] md:flex">
                    <input placeholder="search" type="text" className="bg-[#F4F4F5] w-full" />
                    <CiSearch className="" />
                </div>

            </div>
            <div className="md:max-w-[1216px] md:mx-auto hidden md:block">All Blog Post</div>
        </div>
    )
}