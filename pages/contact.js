import { MainLaytout } from "@/components/MainLayout"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function contact() {
    const [articles, setArticles] = useState([])
    async function Fetch() {
        const response = await fetch(`https://dev.to/api/articles?username=paul_freeman`);
        const data = await response.json()
        setArticles(data)
    }
    useEffect(() => {
        Fetch()
    }, [])
    if (!articles.length) return <div>loading</div>
    return (
        <MainLaytout>

            <div className="max-w-[895px] w-full px-32 mx-auto mb-40">
                <div className="flex flex-col gap-5 mb-12">
                    <div className="text-[#000000] text-4xl mb-5">
                        Contact us
                    </div>
                    <div className="text-[#696A75] text-4xl">
                        {articles[0].description}
                    </div>
                    <div className="text-[#696A75] text-4xl flex gap-10">
                        <div className="border-[1px] rounded-xl p-3">
                            <div className="mb-2.5 text-[#000000]">Address</div>
                            <div>{articles[1].description}</div>
                        </div>
                        <div className="border-[1px] p-3 rounded-xl">
                            <div className="mb-2.5 text-[#000000]">Contact</div>
                            <div>{articles[1].description}</div>
                        </div>
                    </div>
                </div>

                <div className="w-full bg-[#F6F6F7] p-10">
                    <div className="max-w-[478px]">

                        <div className="text-[#000000] mb-6">
                            Leave a Message
                        </div>
                        <div className="flex flex-col gap-5 mb-7">
                            <div className="flex gap-7">
                                <input placeholder="Your Name" className="py-3 px-5 w-[50%] rounded-lg" />
                                <input placeholder="Your Email" className="py-3 px-5 w-[50%] rounded-lg" />
                            </div>

                            <input className="w-full py-3 px-5 rounded-lg" placeholder="Subject" />

                            <textarea
                                placeholder="Write a message"
                                className="textarea textarea-bordered textarea-lg w-full">
                            </textarea>

                        </div>
                        <button className="btn btn-active btn-primary">Send message</button>
                    </div>
                </div>

            </div>
        </MainLaytout>
    )
}