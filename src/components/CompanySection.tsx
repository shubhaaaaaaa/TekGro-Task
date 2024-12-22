import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const companies = [
  "COMPANY", "COMPANY", "COMPANY", "COMPANY", "COMPANY", "COMPANY", "COMPANY"
];

const CompanySection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="p-8 text-center mx-20 my-10">
      <button
        className="relative text-[#1a75bb] font-bold rounded-full mb-6 px-6 py-2 text-sm font-semibold bg-transparent border-2 mx-8"
        style={{
          borderImage: "linear-gradient(to right, #1a75bb, #39cf2b) 1",
        }}
      >
        TRUSTED BY INDUSTRY LEADERS
      </button>

      <p className="mb-10 text-gray-500 font-medium mx-8">
        Discover the companies we've partnered with to create innovative solutions
      </p>

      <Slider {...settings}>
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex justify-center items-center px-5"
          >
            <p className="font-bold text-[#1a75bb] text-3xl"> 
              {company}
            </p>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center gap-8 mt-16 mx-8">
        <button className="bg-[#1a75bb] text-white rounded-md px-8 py-3 text-sm font-medium">
          Start your Project Today
        </button>
        <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-8 py-3 text-sm font-medium">
          Explore Our Portfolio
        </button>
      </div>
    </div>
  );
};

export default CompanySection;
