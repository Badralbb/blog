import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
// Swiper-ийн нэмэлт модулуудыг суулгах

function MySwiper({ article }) {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{draggable:true}}
            modules={[Navigation,
                Pagination]}
        >

            {
                article.map(item => (

                    <SwiperSlide>
                            <Image className='w-full rounded-xl'  src={item.social_image} width={1000} height={500}/>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
}
export default MySwiper;