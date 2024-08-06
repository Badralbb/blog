import { useEffect, useState } from "react";


import Image from "next/image";
import MySwiper from "./Swiper";


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

  return (
    <div>
      <div className="pb-24 hidden md:block max-w-[1216px] mx-auto">
        <div className="md:max-w-[1216px] md:mx-auto hidden md:block mb-8">
          All Blog Post
        </div>
        {/* <div className="carousel w-full aspect-[4/2]">
          {article.map((item, index) => (
            <div
              key={item.id}
              id={`slide${index}`}
              className="carousel-item relative w-full"
            >
              <Image
                width={2000}
                height={2000}
                src={item.cover_iamge || item.social_image}
                className="w-full rounded-xl"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <Link
                  href={`${index == 0
                    ? `#slide${article.length - 1}`
                    : `#slide${index - 1}`
                    }`}
                  className="btn btn-circle"
                >
                  ❮
                </Link>
                <Link
                  href={`${index === article.length - 1
                    ? `#slide0`
                    : `#slide${index + 1}`
                    }`}
                  className="btn btn-circle"
                >
                  ❯
                </Link>
              </div>
              <div className="absolute p-10 left-2 bottom-2 bg-[#E8E8EA] rounded-xl max-w-[30%] w-full">
                <div className="badge badge-primary">{item.tag_list[0]}</div>
                <div>{item.description}</div>
                <div>{dayjs(item.published_at).format("YYYY/MM/d")}</div>
              </div>
            </div>
          ))}
        </div> */}
        <MySwiper article={article} />
      </div>
      <div className="carousel md:hidden carousel-center bg-neutral rounded-box items-center space-x-4 p-4 ">
        {article.map((item) => (
          <div key={item.id} className="carousel-item">
            <Image
              width={500}
              height={500}
              src={item.social_image}
              className="rounded-box w-full"
            />
          </div>
        ))}
      </div>
      <div className="max-w-[1216px] mx-auto">
        <h3 className="mb-8">Trending</h3>

        <div className="hidden md:flex gap-5 mb-28">
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
                  <div className="bg-[#141624] w-full absolute inset-0 opacity-50 rounded-xl"></div>
                  <div className="p-7 absolute w-full bottom-0 left-0 ">
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
        <div className="block md:hidden ">
          <div className="carousel carousel-vertical rounded-box h-96">
            {article.map(
              (item, index) =>
                index < 4 && (
                  <div
                    key={item.id}
                    className="carousel-item h-full max-w-[80%] w-full mx-auto"
                  >
                    <Image
                      className="w-full rounded-3xl"
                      src={item.social_image}
                      width={100}
                      height={100}
                    />
                  </div>
                )
            )}
          </div>
        </div>
      </div>
            
    </div>
  );
};
