import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-[url('/footer-bg-1-1.png')] bg-cover bg-center bg-black mix-blend-luminosity lg:pt-16 pt-0">
      <div className="max-w-[1200px] mx-auto xl:px-0 px-6">
        <div className="flex flex-col lg:flex-row gap-y-8 py-16 justify-between">
          <div>
            <img src="/logo-light.png" alt="" width={155} className="mb-[30px]" />
            <div className="relative flex flex-col items-center">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent text-sm text-white px-6 h-14 font-medium w-full"
              />
              <FiSend size={18} className="text-main absolute right-6 h-full" />
            </div>
          </div>
          <div>
            <h6 className="text-white font-bold mb-6">LINKS</h6>
            <ul className="text-textColor font-medium leading-[30px] flex flex-col ">
              <a href="#" className="hover:text-main">
                About
              </a>
              <a href="#" className="hover:text-main">
                Pricing Plan
              </a>
              <a href="#" className="hover:text-main">
                Promotions
              </a>
              <a href="#" className="hover:text-main">
                Contact
              </a>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-bold mb-6">CONTACT</h6>
            <ul className="text-textColor font-medium leading-[30px] flex flex-col ">
              <p>+1 (760) 997 - 2157</p>
              <p>hbuelna89@hotmail.com</p>
              <p>15 Corte Amor, San Diego</p>
            </ul>
          </div>
          <div>
            <h6 className="text-white font-bold mb-6">TIMING</h6>
            <ul className="text-textColor font-medium leading-[30px] flex flex-col ">
              <p>Mon to Sat: 9:00am – 6:00pm</p>
              <p>Sunday: Closed</p>
              <span className="flex items-center justify-between mt-5">
                <FaTwitter className="rounded-full bg-black text-white p-1 text-2xl" />
                <FaFacebookF className="rounded-full bg-black text-white p-1 text-2xl" />
                <FaPinterest className="rounded-full bg-black text-white p-1 text-2xl" />
                <FaInstagram className="rounded-full bg-black text-white p-1 text-2xl" />
              </span>
            </ul>
          </div>
        </div>
        <div className="text-textColor font-medium text-sm py-8 border-t border-[#ffffff33] text-center">
          Developed By Buelna89.
        </div>
      </div>
    </footer>
  );
}
