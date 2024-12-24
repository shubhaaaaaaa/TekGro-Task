import { FooterSection } from "../components-home/FooterSection";
import { HeaderSection } from "../components-home/HeaderSection";
import HeroSection from "../components-blog/HeroSection";
import Column1 from "../components-blog/Column1";
import Column2 from "../components-blog/Column2";
import Column3 from "../components-blog/Column3";

const Blog = () => {
  return (
    <div>
          <HeaderSection />
          
          <HeroSection />

          <div className="flex justify-between gap-10 px-20 py-10">
              <Column1/>
              <Column2/>
              <Column3/>
          </div>
          
      <FooterSection />
    </div>
  );
};

export default Blog;
