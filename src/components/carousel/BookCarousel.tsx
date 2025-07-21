import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import book1 from '@/assets/carouselImg/book1.jpg';
import book2 from '@/assets/carouselImg/book2.jpg';
import book3 from '@/assets/carouselImg/book3.jpg';
import book4 from '@/assets/carouselImg/book4.jpg';

const books = [book1, book2, book3, book4];

const BookCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      loop
      pagination={{ clickable: true }}
      navigation
      autoplay={{ delay: 3000 }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {books.map((book, index) => (
        <SwiperSlide key={index}>
          <img src={book} alt={`Book ${index + 1}`} className="w-full rounded-lg shadow-md" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BookCarousel;