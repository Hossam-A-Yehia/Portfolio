import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const data = [
    {
        id: 1,
        avatar: AVTR1,
        name: "Ward Ehab",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum repudiandae aperiam provident porro dignissimos, earum magni veniam ab esse possimus vitae vero obcaecati nobis officia eligendi ut dolor hic!"
    },
    {
        id: 2,
        avatar: AVTR2,
        name: "Hossam Yehia",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum repudiandae aperiam provident porro dignissimos, earum magni veniam ab esse possimus vitae vero obcaecati nobis officia eligendi ut dolor hic!"
    },
    {
        id: 3,
        avatar: AVTR3,
        name: "Kero Magdy",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum repudiandae aperiam provident porro dignissimos, earum magni veniam ab esse possimus vitae vero obcaecati nobis officia eligendi ut dolor hic!"
    },
    {
        id: 4,
        avatar: AVTR4,
        name: "Rawan Said",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ipsum repudiandae aperiam provident porro dignissimos, earum magni veniam ab esse possimus vitae vero obcaecati nobis officia eligendi ut dolor hic!"
    },
]


function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <Swiper className='container testimonials__container'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}

            >
                {data.map(
                    e => <SwiperSlide key={e.id} className='testimonial'>
                        <div className='client__avatar'>
                            <img src={e.avatar} alt="" />
                        </div>
                        <h5 className='client__name'>{e.name}</h5>
                        <small className='client__review'>{e.review}</small>
                    </SwiperSlide>
                )}
            </Swiper>
        </section>
    )
}

export default Testimonials