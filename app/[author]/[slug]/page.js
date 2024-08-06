import parse from 'html-react-parser';




export async function generateMetadata({params}){
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
    const article = await response.json()
return{
    openGraph:{
        title:article.title,
        description:article.description,
        images:[{
            url: article.social_image
        }]
    }
}
}
export default async function Page({ params }) {
    const response = await fetch(`https://dev.to/api/articles/${params.author}/${params.slug}`);
    const article = await response.json()
    return (
        <main>
            <div className="prose w-[80%] mx-auto">
                <div>{parse(article.title)}</div>
                <div>{parse(article.body_html)}</div>
            </div>
        </main>
    )





}