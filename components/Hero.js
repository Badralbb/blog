import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "@/components/mn";
dayjs.extend(relativeTime);
const perPage = 5;
export const Hero = () => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);

  const loadmore = () => {
    fetch(
      `https://dev.to/api/articles?username=paul_freeman&page=${page}&per_page=${perPage}`
    )
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        const UpdatedArticles = articles.concat(data);
        setArticles(UpdatedArticles);
        setPage(page + 1);
        if (data.length < perPage) {
          setEnded(true);
        }
      });
  };
  useEffect(() => {
    loadmore();
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 w-full max-w-[1216px] mx-auto md:grid-cols-3">
        {articles.map((item) => (
          <div
            key={item.id}
            className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
          >
            <div className="mb-4 max-w-[360px]">
              <Image
                width={100}
                height={100}
                src={item.cover_image || item.social_image}
                className="w-full rounded-lg aspect-video object-cover bg-slate-600"
              />
            </div>

            <div className="pt-4">
              <div className="mb-5">
                <div className="mb-4">
                  {dayjs(item.published_at).locale("mn").fromNow()}
                </div>
                <div className="badge badge-primary">{item.tag_list[0]}</div>
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
      {!ended && (
        <div className="text-center py-10">
          <button onClick={loadmore} className="btn btn-primary">
            load more
          </button>
        </div>
      )}
    </div>
  );
};
