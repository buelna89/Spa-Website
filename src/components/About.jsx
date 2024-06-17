/* eslint-disable react/prop-types */
import { FaEnvelope } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
import { RiShareFill } from "react-icons/ri";

export default function About() {
  const Team = ({ image, name }) => {
    return (
      <div>
        <div
          className="relative pt-[30px] pl-[30px]"
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
          <img
            src="/team-card-s-1-1.png"
            alt=""
            className="absolute top-0 left-0"
          />
          <img src={image} alt="" className="relative z-10" />
          <div className="absolute left-0 bottom-0 pl-[30px] z-10">
            <div className="bg-white w-[50px] h-[50px] flex items-center justify-center">
              <RiShareFill size={18} />
            </div>
            <div className="bg-main text-white w-[50px] h-[50px] flex items-center justify-center">
              <FaEnvelope size={18} />
            </div>
          </div>
        </div>
        <div className="pl-[30px] mt-6">
          <p className="uppercase text-sm font-semibold text-textColor mb-[5px]">
            Therapist
          </p>
          <h4 className="uppercase text-xl font-bold">{name}</h4>
        </div>
      </div>
    );
  };

  const Services = ({ text }) => {
    return (
      <div
        className="why-choose-three__item flex flex-col p-8 gap-4"
        data-aos="zoom-in-up"
        data-aos-delay="300"
      >
        <div className="text-white text-xl font-bold flex items-center gap-4">
          <div className="bg-main text-white w-14 h-14 rounded-full flex items-center justify-center">
            <HiCheck size={32} />
          </div>
          {text}
        </div>
        <p className="text-white">
          In ree hour when our power choice is and when nothing prevents.
        </p>
      </div>
    );
  };

  return (
    <div>
      <section className="grid lg:grid-cols-3 grid-cols-1 gap-8 max-w-[1200px] mx-auto xl:px-0 px-6 my-16">
        <Team image="/team-1-1.jpg" name="Mike Hardson" />
        <Team image="/team-1-2.jpg" name="aleesha brown" />
        <Team image="/team-1-3.jpg" name="david cooper" />
      </section>
      <section className="bg-[url('/testimonial-bg-1.jpg')] bg-cover bg-no-repeat pt-16 pb-56">
        <div className="lg:flex max-w-[1200px] mx-auto gap-4">
          <div
            className="lg:w-2/5 lg:pr-4 p-6"
            data-aos="zoom-in-down"
            data-aos-delay="300"
          >
            <img src="/sec-title-s-1.png" alt="" className="mb-4" />
            <h4 className="lg:text-[40px] text-[30px] text-main font-medium leading-[1.2em]">
              Get to know us
            </h4>
            <h2 className="lg:text-[50px] text-[35px] font-bold text-white">
              WHY YOU SHOULD CHOOSE US
            </h2>
            <p className="text-textColor font-semibold">
              Aliquam viverra arcu. Donec aliquet blandit enim. Suspendisse id
              quam sed eros tincidunt luctus sit amet eu nibh egestas tempus
              turpis, sit amet mattis magna varius non.
            </p>
          </div>
          <div className="lg:w-3/5 grid lg:grid-cols-2 grid-cols-1 bg-black lg:mx-0 mx-6">
            <Services text="EXPERT STAFF" />
            <Services text="GIFT PACKAGE" />
            <Services text="BEST SERVICES" />
            <Services text="BOOK ONLINE" />
          </div>
        </div>
      </section>
    </div>
  );
}
