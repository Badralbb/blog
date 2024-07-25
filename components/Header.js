import { useEffect, useState } from "react"

export const Header = ()=>{
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        fetch("https://dev.to/api/articles?username=litlyx").then(response =>{
            return response.json()
        }).then(data=>{
            setArticles(data)
        })
    },[])
    console.log({articles})
    return (
        
        <div className={"bg-black"}>

            {/* <div>{articles[0].title}</div> */}
        </div>

        

        
      
    )
}