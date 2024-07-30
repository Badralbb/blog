import { useEffect, useState } from "react";

import parse from 'html-react-parser';
import { useRouter } from 'next/router'


export default function Page() {
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);
    const router = useRouter()
    const { author, slug } = router.query
    useEffect(() => {
        if (router.isReady) {
            getArticle()
        }
    }, [router.isReady])
    async function getArticle() {

        setLoading(true)
            const response = await fetch(`https://dev.to/api/articles/${author}/${slug}`);
            const detail = await response.json()
            setArticle(detail)
    }
    if (!article) {
        return (<div>loading</div>)
    }
    return (
        <div className="prose w-[80%] mx-auto">
            <div>{ parse(article.title)}</div>
            <div>{parse(article.body_html)}</div>
        </div>

    )

}