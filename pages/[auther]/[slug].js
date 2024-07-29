import { useEffect, useState } from "react";





export default function Page() {
    const [article, setArticle] = useState();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        getArticle()
    }, [])
    function getArticle() {
        setLoading(true)
        fetch(`https://dev.to/api/articles/paul_freeman/project-africa-ngo-landing-page-3lcb`).then((response) => {
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
        <div>
                <div>{article.title}</div>
                <div>{article.body_html}</div>
        </div>

    )

}