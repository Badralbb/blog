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
    function getArticle() {
        setLoading(true)
        fetch(`https://dev.to/api/articles/${author}/${slug}`).then((response) => {
            return response.json()
        }).then(data => {
            setArticle(data)
            setLoading(false)
        })
    }
    if (!article) {
        return (<div>loading</div>)
    }
    return (
        <div className="prose max-w-[1200px] mx-auto w-[70%]">
            <div>{article.title}</div>
            <div>{parse(article.body_html)}</div>
        </div>

    )

}