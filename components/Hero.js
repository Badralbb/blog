import Image from "next/image"
import { useEffect, useState } from "react"
 
export const Hero = () => {
    const [articles, setArticles] = useState([])
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=paul_freeman").then(Response => {
            return Response.json()
        }).then(data => {
            setArticles(data)
        })
    }, [])
    return (
        <div className="grid grid-cols-1 gap-2 w-full max-w-[1216px] mx-auto md:grid-cols-3">
            {articles.map(item => (
                <div key={item.id} className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl">
 
                    <div className="rounded-lg mb-">
                        {/* <Image width={100} height={100} src={item.cover_image} /> */}
                        <img src={item.cover_image}/>
                    </div>
                    <div className="pt-4">
                        <div className="mb-5">
                            <div className="mb-4">
 
                                {item.title}
                            </div>
                            <div>
                                {item.title}
                            </div>
                        </div>
                        <div>
                            Ernie Smith
                        </div>
                    </div>
 
                </div>
            ))
 
            }
        </div>
    )
}