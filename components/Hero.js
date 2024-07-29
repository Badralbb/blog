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
  const [page, setPage] = useState(1);
  const [ended, setEnded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [frontend, setFrontend] = useState(false)
  const [All, setAll] = useState(true)
  const [others, setOthers] = useState(false)
  const [webdev, setWebdev] = useState(false)
  const [begginers, setBegginers] = useState(false)

  function Frontend() {
    setFrontend(true);
    setAll(false);
    setOthers(false)
    setWebdev(false)
    setBegginers(false)
  }
  function Others() {
    setOthers(true);
    setFrontend(false);
    setAll(false)
    setWebdev(false)
    setBegginers(false)
  }
  function all() {
    setOthers(false);
    setFrontend(false);
    setWebdev(false)
    setAll(true)
    setBegginers(false)
  }
  function Webdev() {
    setWebdev(true)
    setOthers(false);
    setFrontend(false);
    setAll(false)
    setBegginers(false)
  }
  function Begginers() {
    setWebdev(false)
    setOthers(false);
    setFrontend(false);
    setAll(false)
    setBegginers(true)

  }

  const loadmore = () => {
    setLoading(true);
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
        setLoading(false);
      });
  };
  useEffect(() => {
    loadmore();
  }, []);
  if (!articles.length) {
    return (
      <div>
        loading
      </div>
    )

  }

  return (
    <div className="max-w-[1216px] mx-auto">
      <div className="mb-8">
        <h3 className="mb-8">All blog Post</h3>

        <div className="flex gap-5">
          <div className="hover:text-yellow-300"><button onClick={all} className={All && "text-yellow-300"}>All</button></div>
          <button onClick={Frontend} className={`hover:text-yellow-300 ${frontend && "text-yellow-300"}`}>{articles[0].tag_list[0]}</button>
          <button onClick={Webdev} className={`hover:text-yellow-300 ${webdev && "text-yellow-300"}`}>{articles[0].tag_list[1]}</button>
          <button onClick={Begginers} className={`hover:text-yellow-300 ${begginers && "text-yellow-300"}`}>{articles[0].tag_list[2]}</button>

          <div className="hover:text-yellow-300 "><button onClick={Others} className="focus:text-yellow-300">others</button></div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 w-full mx-auto md:grid-cols-3">
        {All && articles.map((item =>
          <div
            key={item.id}
            className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
          >
            <div className="mb-4 max-w-[360px]">
              <Link target="blank" href={item.url}>
                <Image
                  width={100}
                  height={100}
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
        {frontend && articles.map((item =>
          item.tag_list[0] == "frontend" &&
          <div
            key={item.id}
            className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
          >
            <div className="mb-4 max-w-[360px]">
              <Link target="blank" href={item.url}>
                <Image
                  width={100}
                  height={100}
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

        {webdev && articles.map((item =>
          item.tag_list[0] == "webdev" &&
          <div
            key={item.id}
            className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
          >
            <div className="mb-4 max-w-[360px]">
              <Link target="blank" href={item.url}>
                <Image
                  width={100}
                  height={100}
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
        {begginers && articles.map((item =>
          item.tag_list[0] == "beginners" &&
          <div
            key={item.id}
            className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
          >
            <div className="mb-4 max-w-[360px]">
              <Link target="blank" href={item.url}>
                <Image
                  width={100}
                  height={100}
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
        {others && articles.map((item =>
          item.tag_list[0] != "frontend" && item.tag_list[0] != "webdev" && item.tag_list[0] != "beginners" &&
          <div
            key={item.id}
            className="p-4 max-w-[396px] mx-auto w-full border-[1px] border-solid border-[#E8E8EA] rounded-xl shadow-lg"
          >
            <div className="mb-4 max-w-[360px]">
              <Link target="blank" href={item.url}>
                <Image
                  width={100}
                  height={100}
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
