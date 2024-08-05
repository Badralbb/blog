import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "@/components/mn";
import Link from "next/link";
dayjs.extend(relativeTime);
const perPage = 5;
export const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(0);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);

  let nextPage = 1;
  const [tag, setTag] = useState("");
  const tags = [
    { name: "all", value: "" },
    { name: "Front-end", value: "frontend" },
    { name: "Web-Dev", value: "webdev" },
    { name: "Анхан шат", value: "beginners" },
    { name: "JS", value: "javascript" },
    {
      name: "CSS",
      value: "css",
    },
    {
      name: "HTML",
      value: "html",
    },
    {
      name: "saas",
      value: "saas",
    },
    {
      name: "portfolio",
      value: "portfolio",
    },
    ,
    { name: "programming", value: "programming" },
  ];
  const viewAll = { name: "viewall", value: "viewAll" };
  async function AllView() {
    setEnded(true);
    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&tag=${tag}`
    );
    const data = await response.json();
    setArticles(data);
  }
  async function loadmore() {
    nextPage = page + 1;
    setPage(page + 1);
    console.log(page);
    setLoading(true);
    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${nextPage}&per_page=${perPage}`
    );
    const data = await response.json();
    if (data.length < perPage) {
      setEnded(true);
    }
    setLoading(false);
    setArticles(articles.concat(data));
  }

  async function FilterArticle() {
    setPage(nextPage);
    nextPage = 1;
    const response = await fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${nextPage}&per_page=${perPage}&tag=${tag}`
    );
    const data = await response.json();
    let UpdatedArticles = await data;
    setArticles(UpdatedArticles);
    setLoading(false);
  }

  useEffect(() => {
    FilterArticle();
  }, [tag]);
  if (!articles.length) {
    return <div>loading</div>;
  }

  return (
    <div className="max-w-[1216px] mx-auto">
      <div className="mb-8">
        <h3 className="mb-8">All blog Post</h3>
      </div>

      <div>
        <div className="flex justify-between">
          <div className="flex gap-5 mb-8">
            {tags.map((item) => (
              <div
                key={item.value}
                onClick={() => setTag(item.value)}
                className={`hover:text-yellow-400 cursor-pointer font-bold ${tag === item.value ? "text-yellow-300" : ""
                  }`}
              >
                {item.name}
              </div>
            ))}
          </div>
          <div
            className={`hover:text-yellow-400 cursor-pointer font-bold`}
            onClick={AllView}
          >
            {viewAll.name}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-2 w-full mx-auto md:grid-cols-3 mb-10">
          {articles.map((item) => (
            <div
              key={item.id}
              className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
            >
              <div className="mb-4 max-w-[360px]">
                <Link href={item.path}>
                  <Image
                    width={1000}
                    height={1000}
                    src={item.cover_image || item.social_image}
                    className="w-full rounded-lg aspect-video object-cover bg-slate-600"
                  />
                </Link>
              </div>

              <div className="pt-4">
                <div className="mb-5">
                  <div className="mb-4">
                    {dayjs(item.published_at).locale("mn").fromNow()}
                  </div>
                  <div className="badge badge-primary">
                    {tag !== ""
                      ? item.tag_list.map((item) => item == tag && item)
                      : item.tag_list[0]}
                  </div>
                  <div>{item.description}</div>
                </div>
                <div className="flex gap-2 items-center">
                  <Image src={item.user.profile_image} width={50} height={50} />
                  <div>{item.user.username}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!ended && (
        <div className="text-center pb-10">
          <button
            disabled={loading}
            onClick={loadmore}
            className="btn btn-primary"
          >
            {loading && <span className="loading loading-spinner"></span>}
            load more
          </button>
        </div>
      )}
    </div>
  );
};
