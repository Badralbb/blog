import { MainLaytout } from "@/components/MainLayout"
import Link from "next/link"

export default function contact() {
    return (
        <MainLaytout>

            <div className="max-w-[642px] w-full mx-auto flex gap-14 items-center pb-28">
                <div className="text-7xl text-[#000000]">
                    404
                </div>
                <div className="w-1 h-[156px] bg-[#E8E8EA]"></div>
                <div className="flex flex-col gap-5">

                    <h2 className="text-[#000000] text-2xl">Page Not Found</h2>
                    <p className="text-[#696A75] text-lg">
                        We're sorry, This page is unknown or does not exist the page you are looking for.
                    </p>
                    <div className="flex">

                        <Link href={"/"} className="btn btn-outline btn-primary">
                            Back to Home
                        </Link>
                    </div>
                </div>


            </div>
        </MainLaytout>
    )
}