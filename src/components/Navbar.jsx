import { useState } from "react";
import { MdClose } from "react-icons/md";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { PiShoppingCartLight } from "react-icons/pi";

export default function Navbar() {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="w-full lg:pb-8 flex flex-col justify-center items-center lg:relative sticky top-0 z-50 lg:bg-transparent bg-white">
      <div className="container mx-auto lg:w-full w-[95%]">
        <div className="flex items-center justify-between border-b border-[#e8e3da] lg:w-4/5 w-full mx-auto py-8">
          <img src="/logo-dark.png" alt="" width={156} />
          
          <span className="flex items-center gap-8">
            {dropDown ? (
              <div
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer"
              >
                <MdClose />
              </div>
            ) : (
              <div
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer"
              >
                <HiMenuAlt3 />
              </div>
            )}
            <HiSearch size={24} />
            <PiShoppingCartLight size={24} />
            <button className="lg:block hidden bg-[#C2A74E] text-white text-[10px] font-semibold px-[29px] py-[11px] transition-bg hover:bg-black hover:text-white">
              BOOK NOW
            </button>
          </span>
        </div>
        <div className="lg:w-full mx-auto h-full lg:flex hidden justify-center gap-16 items-center pt-8">
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main"
            >
              HOME
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main"
            >
              PRODUCT
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main"
            >
              TESTIMONIAL
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main"
            >
              TEAM
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-main"
            >
              BLOG
            </a>
          </ul>
        </div>
        {dropDown && (
          <div className="lg:hidden w-full h-full px-6 fixed top-24 bg-white transition-all">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  SERVICES
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  PRODUCT
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  TESTIMONIAL
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  TEAM
                </a>
                <a
                  href="#"
                  className="px-6 h-10 flex items-center leading-normal no-underline font-bold text-lg text-[15px] border-0 border-b border-[#ffffff1a] border-solid"
                >
                  BLOG
                </a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
