/* eslint-disable react/prop-types */
import { HiCheck } from "react-icons/hi";
import { LuAlarmClock } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import RotatedText from "./RotatedText";

export default function Hero() {
  const Card = ({ image, text }) => {
    return (
      <div
        className="relative h-[350px] w-full flex justif-center items-center"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <img src="/offer-s-1-1.png" alt="" className="absolute left-0 z-20" />
        <img
          src={image}
          alt=""
          className="absolute top-0 h-full z-10 object-cover"
        />
        <div className="border border-white z-20 w-[95%] h-[90%] mx-auto">
          <div className="absolute pl-12 flex flex-col items-baseline justify-center h-[90%]">
            <h4 className="text-main lg:text-[40px] text:[30px]">10% off</h4>
            <h3 className="lg:text-[40px] text:[30px] uppercase font-bold pb-4 w-4/5">
              {text}
            </h3>
            <button className="text-xs font-semibold text-white bg-main py-4 px-12 transition-bg hover:bg-black hover:text-white">
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    );
  };

  const Check = ({ text }) => {
    return (
      <span className="flex items-center gap-3 text-lg text-textColor leading-10">
        <HiCheck className="bg-main text-white rounded-full" /> {text}
      </span>
    );
  };

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="bg-[url('/slider-3-bg-1.png')] bg-no-repeat lg:absolute bg-cover bg-center w-full top-0">
          <div>
            <img
              src="/slider-3-shape-1.png"
              alt=""
              className="lg:block hidden absolute top-0 right-0"
            />
            <img
              src="/slider-3-shape-2.png"
              alt=""
              className="lg:block hidden absolute bottom-0 left-0"
            />
          </div>
          <div className="max-w-[1200px] mx-auto xl:px-0 px-6 pb-16 lg:mt-60 pt-16 lg:flex items-center">
            <div
              className="lg:w-1/2 relative z-10"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <h6 className="text-textColor font-semibold mb-4">
                Natural approach to better health
              </h6>
              <h2 className="lg:text-[70px] font-semibold lg:leading-[70px] uppercase mb-9">
                Discover place where you feel magical
              </h2>
              <button className="text-xs font-semibold text-white bg-main py-4 px-12 transition-bg hover:bg-black hover:text-white">
                DISCOVER MORE
              </button>
            </div>
            <div
              className="lg:mt-0 mt-8"
              data-aos="fade-right"
              data-aos-delay="300"
            >
              <div className="relative z-10 rounded-[250px] lg:h-[622px] h-[480px] flex items-center justify-center">
                <img
                  src="/slider-3-1.jpg"
                  alt=""
                  className="lg:absolute rounded-[250px] top-0 lg:h-full z-10"
                />
                <img
                  src="/slider-3-shape-3.png"
                  alt=""
                  className="lg:block hidden main_slider_three_img relative z-10"
                />
                <img
                  src="/slider-3-shape-4.png"
                  alt=""
                  className="absolute left-4 top-4 main-slider-three_leaf_one lg:block hidden"
                />
                <img
                  src="/slider-3-shape-5.png"
                  alt=""
                  className="absolute right-16 bottom-0 main-slider-three_leaf_two lg:block hidden"
                />
                <img
                  src="/about-3-flower.png"
                  alt=""
                  className="lg:block hidden absolute right-8 top-0 z-10 about_three__thumb__flower_img"
                  style={{ rotate: "90deg" }}
                />
                <div className="absolute z-10 left-0 right-0 bottom-0 lg:block flex justify-center">
                  <div className="w-[173px] h-[173px] bg-white rounded-full relative flex items-center justify-center main-slider-three_left_text">
                    <RotatedText />
                    <div className="bg-main text-white w-[95px] h-[95px] rounded-full flex items-center justify-center absolute">
                      <FaPlay size={24} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="my-16">
        <div className="max-w-[1600px] mx-auto px-6 flex lg:flex-row flex-col gap-4">
          <Card image="/offer-1-1-bg.png" text="spa & beauty treatment" />
          <Card image="/offer-1-2-bg.png" text="thai Massage creams" />
        </div>

        <div className="my-16 max-w-[1200px] mx-auto xl:px-0 px-6 lg:flex gap-12 justify-between">
          <div
            className="relative lg:w-1/3"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <img
              src="/about-3-flower.png"
              alt=""
              className="absolute -left-8 z-20 about_three__thumb__flower_img"
            />
            <img
              src="/about-3-1.jpg"
              alt=""
              className="rounded-full relative z-10"
            />
            <img
              src="/about-3-border.png"
              alt=""
              className="main_slider_three_img absolute bottom-14 left-0"
            />
          </div>

          <div className="lg:w-1/3" data-aos="zoom-in-up" data-aos-delay="300">
            <h4 className="text-3xl font-bold mb-6 lg:pt-0 pt-8">
              ESSENTIAL BALANCE WELLNESS
            </h4>
            <p className="text-main text-2xl font-semibold mb-[30px] leading-8">
              We’re providing the best quality & natural spa and beauty
              services.
            </p>
            <p className="leading-[30px] mb-10">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
            <button className="text-xs font-semibold text-white bg-main py-4 px-12 transition-bg hover:bg-black hover:text-white">
              DISCOVER MORE
            </button>
          </div>
          <div
            className="lg:w-1/3 mt-8"
            data-aos="zoom-in-up"
            data-aos-delay="300"
          >
            <h4 className="text-3xl font-bold mb-6">OUR BENEFITS</h4>
            <Check text="Quality Services" />
            <Check text="100% Satisfaction Guarantee" />
            <Check text="Highly Professional Members" />
            <Check text="Give Always Best" />
            <Check text="Best Value Solutions" />
            <Check text="Professional and Qualified" />
            <div className="flex items-center gap-8 border-t-[6px] border-[#f9f6f1] py-4 mt-4">
              <img src="/about-author-2.png" alt="" className="rounded-full" />
              <span className="flex flex-col gap-2">
                <img src="/about-sign-2.png" alt="" />
                <p className="text-sm ">Christine - Co Founder</p>
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-12 max-w-[1200px] mx-auto xl:px-0 px-6 relative"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <div className=" bg-main lg:flex items-center justify-between ">
            <div className="lg:w-44 w-full h-full py-10 opening_wrapper">
              <LuAlarmClock size={65} className="text-white h-20 w-full" />
            </div>
            <div className="lg:w-1/4 text-center lg:py-0 py-8">
              <h4 className="text-white text-3xl font-bold">OPENING HOURS</h4>
            </div>
            <div className="lg:w-1/4 text-center lg:pb-0 pb-8">
              <p className="text-xs text-white">MONDAY TO FRIDAY</p>
              <p className="text-white text-xl">09:00 am - 06:00 pm</p>
            </div>
            <div className="lg:w-1/4 text-center lg:pb-0 pb-8">
              <p className="text-xs text-white">SATURDAY</p>
              <p className="text-white text-xl">11:00 am to 3:00 pm</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
