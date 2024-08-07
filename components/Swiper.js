import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import AutoPlay from './Slider';
// Swiper-ийн нэмэлт модулуудыг суулгах

function MySwiper({ article }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            effect='coverflow'
            flipEffect={{
                slideShadows:true,
                limitRotation:true,
            }}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth:100,
                modifier: 1,
                slideShadows:true,
            }}
            autoplay={{delay: 3000, disableOnInteraction:false}}
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            modules={[Navigation,
                Pagination, EffectFade,EffectCoverflow,Autoplay]}
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