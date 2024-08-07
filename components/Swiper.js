import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, EffectCube, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
// Swiper-ийн нэмэлт модулуудыг суулгах

function MySwiper({ article }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            effect='cube'
            cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
            }}
            // coverflowEffect={{
            //     rotate: 50,
            //     stretch: 0,
            //     depth:100,
            //     modifier: 1,
            //     slideShadows:true,
            // }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[EffectCube, Navigation,
                Pagination, EffectFade, EffectCoverflow, Autoplay]}
        >

            {
                article.map(item => (

                    <SwiperSlide>
                        <Image className='w-full rounded-xl' src={item.social_image} width={1000} height={500} />
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
}
export default MySwiper;