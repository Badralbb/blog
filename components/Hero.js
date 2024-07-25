import Image from "next/image"
import { useEffect, useState } from "react"
const perPage = 5
export const Hero = () => {
    const [articles, setArticles] = useState([])
    const [page,setPage] = useState(1)
    const [ended,setEnded] = useState(false)
  
    const loadmore = () => {
        fetch(`https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${perPage}`).then(Response => {
            return Response.json()
        }).then(data => {
            const UpdatedArticles = articles.concat(data)
            setArticles(UpdatedArticles)
            setPage(page + 1)
            if(data.length < perPage){
                setEnded(true)
            }
        })
    }
    useEffect(() => {
       loadmore()
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 gap-2 w-full max-w-[1216px] mx-auto md:grid-cols-3">
                {articles.map(item => (
                    <div key={item.id} className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg">

                        <div className="mb-4 max-w-[360px]">

                            <Image width={100} height={100} src={item.cover_image || item.social_image} className="w-full rounded-lg" />

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
            {
                !ended&&
            <div className="text-center py-10">
                <button onClick={loadmore} className="btn btn-primary">load more</button>
            </div>
            }
        </div>


    )
}