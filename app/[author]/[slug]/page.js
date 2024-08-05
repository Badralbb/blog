import { useEffect, useState } from "react";

import parse from 'html-react-parser';



async function page({ params }) {

    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
    const detail = await response.json()


}



return (
    <div>


        <div className="prose w-[80%] mx-auto">
            <div>{parse(article.title)}</div>
            <div>{parse(article.body_html)}</div>
        </div>
    </div>

)

