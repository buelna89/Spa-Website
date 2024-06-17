import { useEffect } from "react";
import Navbar from "./components/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
