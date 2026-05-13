import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Capability from "./components/Capability";
import MenuSection from "./components/MenuSection";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Capability />
      <MenuSection />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}
