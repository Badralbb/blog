import { useEffect, useState } from "react"

export const Header = () => {
    const [article, setArticle] = useState([])
    useEffect(() => {
        fetch("https://dev.to/api/articles?username=ben").then(response => {
            return response.json()
        }).then(data => {
            setArticle(data)
        })
    }, [])

    return (
        <div>
{/* 
            {
                article.map((item,index)=>(index === 0 &&
                <div className="w-full h-[1000px] bg-no-repeat bg-cover" style={{ backgroundImage: `url(${item.social_image})` }}>
                <div>{article[0].title}</div>
            </div>
                ))

            } */}



        </div>




    )
}