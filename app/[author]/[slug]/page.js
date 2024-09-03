import parse from "html-react-parser";

export async function generateMetadata({ params }) {
  const response = await fetch(
    `https://dev.to/api/articles/${params.author}/${params.slug}`
  );
  const article = await response.json();
  return {
    title: "Badral's Blog",
    openGraph: {
      title: article.title,
      description: article.description,
      images: [
        {
          url: article.social_image,
        },
      ],
    },
  };
}
export default async function Page({ params }) {
  const response = await fetch(
    `https://dev.to/api/articles/${params.author}/${params.slug}`
  );
  const article = await response.json();
  return (
    <main>
      <div className="w-[80%] mx-auto">
        <div>{article.title}</div>
        <div>{article.body_html}</div>
      </div>
    </main>
  );
}
