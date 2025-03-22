import Slider from 'react-slick';
import data from '../utility/data.json';
import { useRef } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

function Testimonials() {
  const sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container relative">
      <div className="absolute top-1/2 left-0 z-1 flex w-full -translate-y-1/2 justify-between space-x-2">
        <button
          onClick={() => sliderRef.current?.slickPrev()}
          className="cursor-pointer rounded-lg bg-primary p-1 text-white transition hover:bg-gray-400"
        >
          <MdKeyboardArrowLeft size={22} />
        </button>
        <button
          onClick={() => sliderRef.current?.slickNext()}
          className="ml-5 cursor-pointer rounded-lg bg-primary p-1 text-white transition hover:bg-gray-400"
        >
          <MdKeyboardArrowRight size={22} />
        </button>
      </div>
      <Slider {...settings} ref={sliderRef} className="">
        {data.testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group mx-2 cursor-pointer rounded-2xl bg-white px-6 py-6"
          >
            <h3 className="text-center text-xl font-semibold text-primary transition duration-200 group-hover:scale-120">
              {testimonial.name}
            </h3>
            <p className="pt-4 text-center text-sm font-semibold text-gray-500 transition duration-200 group-hover:scale-105">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Testimonials;
