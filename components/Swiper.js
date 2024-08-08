import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

// Swiper-ийн нэмэлт модулуудыг суулгах

function MySwiper({ article }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation={{
                nextEl: ".custom-next",
                prevEl: ".custom-prev"
            }}
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
            modules={[
                Navigation,Pagination, EffectFade,EffectCoverflow,Autoplay]}
        >
            {
                article.map(item => (

                    <SwiperSlide key={item.id}>
                        <Image className='w-full rounded-xl' src={item.social_image} width={2000} height={200} />
                    </SwiperSlide>
                ))
            }
            <div className='custom-prev'></div>
            <div className='custom-next'></div>

        </Swiper>
    );
}
export default MySwiper;