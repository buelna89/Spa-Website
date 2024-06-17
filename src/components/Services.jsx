/* eslint-disable react/prop-types */
import { HiArrowLongRight } from "react-icons/hi2";
import { FaJava } from "react-icons/fa";
import { GiHerbsBundle, GiStoneStack } from "react-icons/gi";
import { HiStar } from "react-icons/hi";

export default function Services() {
  const Offer = ({ image, name, icon }) => {
    return (
      <div
        className="bg-[url('/service-card-two-bg-1.png')] bg-left-top bg-no-repeat bg-white flex flex-col items-center py-12 lg:px-0 px-6 offer_card"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="relative">
          <img src={image} alt="" className="rounded-full " />
          <span className="bg-main rounded-full text-white absolute top-0 w-[106px] h-[106px] flex justify-center items-center -left-10 overflow-hidden">
            {icon}
          </span>
        </div>
        <div className="lg:w-4/5 mx-auto mt-8 flex flex-col items-center">
          <h4 className="text-2xl text-center font-bold mb-3">{name}</h4>
          <img src="/service-card-two-s-1.png" alt="" />
          <p className="leading-[30px] mt-[10px] pb-5 mb-[5px] text-[15px] text-center">
            I was impresed by the moling services, not lorem ipsum is simply
            free text.
          </p>
          <button className="flex items-center gap-3 bg-[#f9f6f1] w-full py-2 justify-center text-sm transition-bg hover:bg-black hover:text-white">
            BOOK NOW
            <HiArrowLongRight size={24} />
          </button>
        </div>
      </div>
    );
  };

  const Product = ({ image, name }) => {
    return (
      <div
        className="border border-[#e8e3da] flex flex-col justify-center items-center pb-8"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <div className="relative overflow-hidden">
          <img src={image} alt="" className="hoverImg" />
        </div>
        <span className="flex gap-1 justify-center">
          {[...Array(5)].map((_, index) => (
            <HiStar key={index} size={20} className="text-main" />
          ))}
        </span>
        <h4 className="text-xl font-semibold">{name}</h4>
        <p className="text-textColor font-medium mb-5">$82.00</p>
        <button className="bg-[#f9f6f1] px-7 py-2 text-xs font-bold text-textColor transition-bg hover:bg-main hover:text-white">
          ADD TO CART
        </button>
      </div>
    );
  };

  return (
    <div>
      <section
        className="bg-[url('/service-bg-3.jpg')] bg-no-repeat bg-center bg-cover flex flex-col justify-center items-center lg:pt-24 pt-8"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        <img src="/sec-title-s-1.png" alt="" className="mb-4" />
        <h4 className="lg:text-[40px] text-[30px] text-main font-medium leading-[1.2em]">
          Spa services
        </h4>
        <h2 className="lg:text-[50px] text-[35px] font-bold">WHAT WE OFFER</h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 max-w-[1200px] mx-auto xl:px-0 px-6 mt-8 lg:-mb-40">
          <Offer
            image="/service-2-1.jpg"
            name="Sauna relax"
            icon={<GiHerbsBundle size={60} className="hoverImg" />}
          />
          <Offer
            image="/service-2-2.jpg"
            name="Aroma Therapy"
            icon={<FaJava size={60} className="hoverImg" />}
          />
          <Offer
            image="/service-2-3.jpg"
            name="Thermo Stone"
            icon={<GiStoneStack size={60} className="hoverImg" />}
          />
        </div>
      </section>
      <section
        className="flex flex-col justify-center items-center lg:mt-60 mt-24"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        <img src="/sec-title-s-1.png" alt="" className="mb-4" />
        <h4 className="lg:text-[40px] text-[30px] text-main font-medium leading-[1.2em]">
          New Products
        </h4>
        <h2 className="lg:text-[50px] text:[35px] font-bold">SHOP PRODUCTS</h2>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 max-w-[1200px] mx-auto xl:px-0 px-6 mt-8">
          <Product image="product-1-1.jpg" name="BODY CREAM" />
          <Product image="product-1-2.jpg" name="BODY CARE" />
          <Product image="product-1-3.jpg" name="FACE LOTION" />
          <Product image="product-1-4.jpg" name="SKIN CARE" />
        </div>
      </section>
      <section
        className="flex flex-col lg:flex-row gap-6 mt-20 mb-6"
        data-aos="zoom-in-down"
        data-aos-delay="300"
      >
        <div className="grid lg:grid-cols-3 gap-6 lg:w-2/3">
          <div className="relative overflow-hidden">
            <img
              src="/gallery-2-1.jpg"
              alt=""
              className="h-[370px] w-full hoverImg object-cover"
            />
          </div>
          <div className="lg:h-[370px] flex flex-col justify-between items-baseline">
            <div className="relative overflow-hidden h-[47%] w-full">
              <img
                src="/gallery-2-2.jpg"
                alt=""
                className="h-full w-full hoverImg object-cover"
              />
            </div>
            <div className="relative overflow-hidden h-[47%] w-full">
              <img
                src="/gallery-2-2.jpg"
                alt=""
                className="h-full w-full hoverImg object-cover"
              />
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src="/gallery-2-4.jpg"
              alt=""
              className="h-[370px] w-full hoverImg object-cover"
            />
          </div>
        </div>
        <div className="bg-main flex flex-col justify-center items-start text-white px-16 lg:py-0 py-8 lg:w-1/3">
          <img src="/gallery-icon.png" alt="" />
          <h2 className="lg:text-[44px] text-[30px] font-bold leading-[50px] pt-8">
            TRUSTED & RELIABLE SPA & BEAUTY GALLERY
          </h2>
        </div>
      </section>
    </div>
  );
}
