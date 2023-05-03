import './carousel.scss'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import image1 from '../../assets/ameer-basheer-Xrx3WWyrwes-unsplash.jpg'
import image2 from '../../assets/boris-baldinger-eUFfY6cwjSU-unsplash.jpg'
import image3 from '../../assets/pawel-czerwinski-6lQDFGOB1iw-unsplash.jpg'



const Carousel = () => {
  return (
    <div className='carousel'>
         <Swiper
        loop={true}
        speed={1000}
        navigation={{
            nextEl: ".next",
            prevEl: ".prev",
            
        }}
        autoplay={{
          delay:3000 ,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el:'.swiperPagination',
          bulletClass:'swiper-bullet',
          bulletActiveClass:'swiper-bullet-active'
        }}
        modules={[ Navigation, Pagination, Autoplay ]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="slideContent">
        <img src={image1} alt='carousel' />
        <div className="text">
            <h4>FEATURED APP</h4>
            <h2>Disney Zombies 2</h2>
            <p>Believe These 7 Myths About Everything</p>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slideContent">
        <img src={image3} alt='carousel' />
        <div className="text">
            <h4>FEATURED APP</h4>
            <h2>Travelroom Mobile - kolingrade</h2>
            <p>Dont Waste Time! 7 Facts Until You finish dream</p>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="slideContent">
        <img src={image2} alt='carousel' />
        <div className="text">
            <h4>FEATURED APP</h4>
            <h2>Harry Potter and the Deathly Hallows</h2>
            <p>Apply These 7 Secret Techniques</p>
        </div>
        </div>
        </SwiperSlide>

        <div className="swiperNavigation">
        <span><KeyboardArrowLeftIcon className='prev'/></span> <span><KeyboardArrowRightIcon className='next'/></span>
      </div>
      <div className="swiperPagination"></div>
      </Swiper>
    </div>
  )
}

export default Carousel