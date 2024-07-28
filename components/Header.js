import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import dayjs from "dayjs";
import Image from "next/image";
export const Header = () => {
  const [article, setArticle] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=ben")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticle(data);
      });
  }, []);
  const [count, setCount] = useState(2);
  function RightArrow() {
    setCount(count + 1);
  }
  function LeftArrow() {
    setCount(count - 1);
  }
  return (
    <div>
      <div className="pb-24 hidden md:block max-w-[1216px] mx-auto">
        <div
          className={`
          hidden bg-cover max-w-[1216px] mx-auto aspect-[4/2] md:block w-full rounded-xl relative`}
        >
          {article.map(
            (item, index) =>
              index === 0 && (
                <div
                  key={index}
                  className={`transition-[10s] ${count !== 2 && "opacity-0"} `}
                >
                  <Image
                    width={600}
                    height={1200}
                    src={item.social_image}
                    className="absolute inset-0 w-full rounded-xl"
                  />
                  <div className="absolute p-10 left-2 bottom-2 bg-slate-300 rounded-xl w-96 h-48">
                    <div>{item.tag_list[0]}</div>
                    <div>{item.description}</div>
                    <div>{dayjs(item.published_at).format("YYYY/MM/d")}</div>
                  </div>
                </div>
              )
          )}
          {article.map(
            (item, index) =>
              index === 1 && (
                <div
                  key={index}
                  className={`transition-[10s] ${count != 1 && "opacity-0"}`}
                >
                  <Image
                    width={600}
                    height={1200}
                    src={item.social_image}
                    className="absolute inset-0 w-full rounded-xl "
                  />
                  <div className="absolute p-10 left-2 bottom-2 bg-slate-300 rounded-xl w-96 h-48">
                    <div>{item.tag_list[0]}</div>
                    <div>{item.description}</div>
                    <div>{dayjs(item.published_at).format("YYYY/MM/d")}</div>
                  </div>
                </div>
              )
          )}
          {article.map(
            (item, index) =>
              index === 2 && (
                <div
                  key={index}
                  className={`transition-[10s] ${count !== 3 && "opacity-0"}`}
                >
                  <Image
                    width={600}
                    height={1200}
                    src={item.social_image}
                    className="absolute inset-0 w-full rounded-xl "
                  />
                  <div className="absolute p-10 left-2 bottom-2 bg-slate-300 rounded-xl w-96 h-48">
                    <div>{item.tag_list[0]}</div>
                    <div>{item.description}</div>
                    <div>{dayjs(item.published_at).format("YYYY/MM/d")}</div>
                  </div>
                </div>
              )
          )}
        </div>

        <div className="flex gap-1 justify-end px-3 pt-2.5">
          <button
            onClick={LeftArrow}
            className={`${count === 1 && "hidden"} btn btn-active btn-primary`}
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={RightArrow}
            className={`${count === 3 && "hidden"} btn btn-active btn-primary`}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="max-w-[1216px] mx-auto">
        <h3 className="mb-8">Trending</h3>

        <div className="flex gap-5 mb-28">
          {article.map(
            (item, index) =>
              index < 4 && (
                <div
                  key={item.id}
                  className="max-w-[293px] w-full relative overflow-hidden"
                >
                  <Image
                    className="w-full rounded-xl"
                    src={item.user.profile_image}
                    width={100}
                    height={100}
                  />
                  <div className="p-7 absolute w-full bottom-0 left-0">
                    <div className="badge badge-primary mb-4">
                      {item.tag_list[0]}
                    </div>
                    <div className="text-[#ffffff] drop-shadow-xl">
                      {item.description}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};
