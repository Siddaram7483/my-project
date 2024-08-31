import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import BgImage from "./assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import Img1 from "./assets/2.png";
import Img2 from "./assets/3.png";
import TabComp from "./components/Tab/TabComp";
import Testimonials from "./components/Testimonials/Testimonials";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";

const BannerData = {
  image: Img1,
  title: "The Importance of Taking Care of Yourself",
  subtitle:
    "Taking care of yourself is crucial for maintaining both your physical and mental well-being. Ensuring that you prioritize self-care can lead to a healthier, happier, and more balanced life. Whether it's through exercise, healthy eating, or mindfulness, making time for self-care is a key part of living well.",
  link: "/",
};

const Banner2Data = {
  image: Img2,
  title: "The Importance of Taking Care of Your Body and Mind",
  subtitle:
    "Taking care of both your body and mind is essential for overall well-being. By nurturing your physical health through exercise and proper nutrition, and your mental health through mindfulness and self-reflection, you create a balanced and fulfilling life. Prioritizing self-care ensures that you remain strong, resilient, and ready to face the challenges of everyday life.",
  link: "/",
};

// Background style object
const bgStyle = {
  backgroundImage: `url(${BgImage})`,  // Correct syntax for setting the background image
  backgroundRepeat: "no-repeat",       // Correct to prevent repeating the background image
  backgroundSize: "cover",             // Correct to make sure the image covers the entire container
  backgroundPosition: "center",        // Correct to center the background image
  backgroundAttachment: "fixed",       // Correct to keep the background fixed during scroll
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...BannerData} />
      <TabComp />
      <Banner {...Banner2Data} />
      <Testimonials/>
      <Banner2/>
      <Footer/>
    </div>
  );
};

export default App;
