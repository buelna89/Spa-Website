/* eslint-disable react/prop-types */
import { FaComment } from "react-icons/fa";
import { GiHerbsBundle, GiStoneStack } from "react-icons/gi";
import { HiArrowLongRight } from "react-icons/hi2";

export default function Blog() {
  const Blog = ({ image, text }) => {
    return (
      <div className="relative" data-aos="zoom-in-up" data-aos-delay="300">
        <div className="relative overflow-hidden">
          <img src={image} alt="" height={296} className="hoverImg w-full" />
        </div>
        <div className="w-full h-full pl-[30px] -mt-[100px] relative z-20">
          <span className="bg-main text-white text-xs font-bold w-14 h-14 flex flex-col justify-center items-center text-center px-6 leading-3">
            28 JULY
          </span>
          <div className="bg-white offer_card p-[30px]">
            <span className="flex gap-2 font-semibold">
              <li className="flex gap-2 pr-2 border-r border-main">
                <img
                  src="/blog-author-1-1.jpg"
                  alt=""
                  className="w-6 h-6 rounded-full object-cover"
                />
                <p className="text-sm text-textColor">by admin</p>
              </li>
              <li className="flex gap-1 items-center">
                <FaComment className="text-main" />
                <p className="text-sm text-textColor">2 Comments</p>
              </li>
            </span>
            <h4 className="text-2xl font-semibold uppercase pb-6 pt-2 mb-[5px] border-b border-[#e8e3da]">
              {text}
            </h4>
            <a href="#" className="font-bold flex gap-2 text-sm pt-3">
              READ MORE <HiArrowLongRight size={24} />
            </a>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <section
        className="bg-[url('/service-bg-3.jpg')] bg-cover bg-no-repeat bg-center py-20 max-w-[1400px] mx-auto grid lg:grid-cols-4 grid-cols-1 px-20 gap-16 -mt-24"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <div className="lg:border-r border-[#e8e3da] flex flex-col items-center">
          <span className="bg-main text-white w-[106px] h-[106px] flex justify-center items-center">
            <GiHerbsBundle size={60} className="hoverImg" />
          </span>
          <h4 className="text-[40px] font-medium">23</h4>
          <p className="mt-[9px] text-textColor font-medium">
            Years Of Experience
          </p>
        </div>
        <div className="lg:border-r border-[#e8e3da] flex flex-col items-center">
          <span className="bg-main text-white w-[106px] h-[106px] flex justify-center items-center">
            <GiStoneStack size={60} className="hoverImg" />
          </span>
          <h4 className="text-[40px] font-medium">870</h4>
          <p className="mt-[9px] text-textColor font-medium">
            Wellness Spa & Beauty
          </p>
        </div>
        <div className="lg:border-r border-[#e8e3da] flex flex-col items-center">
          <span className="bg-main text-white w-[106px] h-[106px] flex justify-center items-center">
            <GiHerbsBundle size={60} className="hoverImg" />
          </span>
          <h4 className="text-[40px] font-medium">30</h4>
          <p className="mt-[9px] text-textColor font-medium">
            Herbal Skin Treamtments
          </p>
        </div>
        <div className="lg:border-r border-[#e8e3da] flex flex-col items-center">
          <span className="bg-main text-white w-[106px] h-[106px] flex justify-center items-center">
            <GiHerbsBundle size={60} className="hoverImg" />
          </span>
          <h4 className="text-[40px] font-medium">980</h4>
          <p className="mt-[9px] text-textColor font-medium">
            Our Happy Clients
          </p>
        </div>
      </section>
      <section
        className="max-w-[1200px] mx-auto xl:px-0 px-6 flex flex-col justify-center items-center py-16"
        data-aos="zoom-in-down"
      >
        <img src="/sec-title-s-1.png" alt="" className="mb-4" />
        <h4 className="lg:text-[40px] text-[30px] text-main font-medium leading-[1.2em]">
          From the blog
        </h4>
        <h2 className="lg:text-[50px] text-[35px] font-bold uppercase">
          News & Articles
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 mt-12">
          <Blog image="/blog-1-1.png" text="Best place of true splander" />
          <Blog image="/blog-1-2.png" text="Best place of true splander" />
          <Blog image="/blog-1-3.png" text="Best place of true splander" />
        </div>
      </section>
    </div>
  );
}
