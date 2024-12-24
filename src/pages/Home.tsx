import FloatingMenu from "../components-home/FloatingMenu";
import { FooterSection } from "../components-home/FooterSection";
import { HeaderSection } from "../components-home/HeaderSection";
import HeroSection from "../components-home/HeroSection";
import FirstSection from "../components-home/FirstSection";
import SecondSection from "../components-home/SecondSection";
import TenthSection from "../components-home/TenthSection";
import ThirdSection from "../components-home/ThirdSection";
import FourthSection from "../components-home/FourthSection";
import FifthSection from "../components-home/FifthSection";
import SixthSection from "../components-home/SixthSection";
import SeventhSection from "../components-home/SeventhSection";
import EigthSection from "../components-home/EigthSection";
import NinthSection from "../components-home/NinthSection";
import InfoCard from "../components-home/InfoCard";

const Home = () => {
  return (
    <div>
      <HeaderSection />

      <HeroSection />

      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EigthSection />
      <NinthSection />
      <TenthSection />

      <InfoCard />
      <FooterSection />

      <FloatingMenu />
    </div>
  );
};

export default Home;
