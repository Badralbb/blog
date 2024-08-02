import { MainLaytout } from "@/components/MainLayout"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function contact() {
const [articles,setArticles] = useState([])
async function Fetch(){
    const response = await fetch(`https://dev.to/api/articles?username=paul_freeman`);
    const data = await response.json()
    setArticles(data)
}
useEffect(()=>{
    Fetch()
},[])
if(!articles.length) return <div>loading</div>
    return (
        <MainLaytout>

            <div className="max-w-[895px] w-full px-32 mx-auto">
            <div className="flex flex-col gap-5">
            <div className="text-[#000000] text-4xl">
                {articles[0].title}
            </div>
            <div className="text-[#000000] text-4xl">
                {articles[0].description}
            </div>
            <div className="text-[#000000] text-4xl">
                {articles[0].day}
            </div>
            </div>
            <div>

            </div>

            </div>
        </MainLaytout>
    )
}