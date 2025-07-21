// Carousel.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import book1 from '@/assets/carouselImg/book1.jpg';
import book2 from '@/assets/carouselImg/book2.jpg';
import book3 from '@/assets/carouselImg/book3.jpg';
import book4 from '@/assets/carouselImg/book4.jpg';

const images = [
  book1,
  book2,
  book3,
  book4,
];


const Carousel = () => {
  return (
    <div className="w-full mx-auto rounded-lg overflow-hidden shadow-lg">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide-${index}`} className="w-full h-[500px] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
