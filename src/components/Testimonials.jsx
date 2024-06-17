import { useRef } from "react";
import { HiStar } from "react-icons/hi";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  module: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function Testimonials() {
  const carouselRef = useRef();
  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next(0);
  };
  const handlePrevious = () => {
    if (carouselRef.current) carouselRef.current.previous(0);
  };

  return (
    <div>
      <section className="bg-[url('/service-bg-3.jpg')] bg-no-repeat bg-center bg-cover py-20">
        <div className="max-w-[1200px] mx-auto xl:px-0 px-6 lg:flex gap-8">
          <div className="lg:w-1/3" data-aos="fade-right" data-aos-delay="300">
            <img src="/sec-title-s-1.png" alt="" className="mb-4" />
            <h4 className="lg:text-[40px] text-[30px] text-main font-medium leading-[1.2em]">
              Our testimonials
            </h4>
            <h2 className="lg:text-[50px] text-[35px] font-bold pb-[27px] uppercase">
              WHAT THEY’re SAYING
            </h2>
            <p className="text-[15px] mb-7">
              Aliquam viverra arcu. Donec aliquet blandit enim feugiat.
              Suspendisse id quam sed eros tincidunt luctus sit amet eu nibh
              tempus turpis.
            </p>
            <span className="flex items-center gap-x-2">
              <button
                onClick={handlePrevious}
                className="bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-main hover:text-white transition-bg"
              >
                <HiArrowLongLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-main hover:text-white transition-bg"
              >
                <HiArrowLongRight size={20} />
              </button>
            </span>
          </div>
          <div className="lg:w-2/3">
            <Carousel
              partialVisible={false}
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite
              autoPlay={true}
              arrows={false}
              keyBoardControl={true}
              renderButtonGroupOutside={true}
              ref={carouselRef}
              containerClass="bg-transparent"
            >
              <div className="relative lg:flex h-full py-20 items-center">
                <div className="lg:absolute lg:max-w-[500px] z-20">
                  <div className="bg-white p-[10px] w-full h-full offer_card bg-[url('/testi-3-shape-bg.png')] bg-no-repeat bg-right-top">
                    <div className="bg-main">
                      <h4 className="text-white font-bold text-lg uppercase py-[10px] px-12 mb-7">
                        Kevin Martin .{" "}
                        <span className="text-sm normal-case">CEO Solox</span>
                      </h4>
                    </div>
                    <span className="flex gap-1 justify-start px-12 pb-4">
                      {[...Array(5)].map((_, index) => (
                        <HiStar key={index} size={20} className="text-main" />
                      ))}
                    </span>
                    <p className="italic lg:text-2xl text-xl leading-10 font-medium lg:mr-10 mb-9 lg:ml-12 mx-[30px]">
                      This is due to their excellent service, competitive
                      pricing and customer support. It’s throughly refresing to
                      get such a personal touch. Duis aute irure dolor in
                      reprehenderit in voluptate velit esse cillum.
                    </p>
                  </div>
                </div>
                <div className="flex w-full lg:justify-end justify-center relative lg:h-auto h-[280px] mt-12">
                  <img
                    src="/testi-3-1.jpg"
                    alt=""
                    className="lg:w-[429px] lg:h-[429px] rounded-full relative"
                  />
                  <img
                    src="/testi-3-2.jpg"
                    alt=""
                    className="absolute top-0 rounded-full"
                  />
                  <img
                    src="/about-3-flower.png"
                    alt=""
                    className="lg:block hidden absolute right-0 top-24 about_three__thumb__flower_img"
                  />
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
