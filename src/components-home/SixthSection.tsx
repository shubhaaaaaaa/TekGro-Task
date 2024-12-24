import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const apps = [
  "APP", "APP", "APP", "APP", "APP", "APP", "APP"
];

const SixthSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
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
    <div className="p-8 text-center px-20 my-20 py-16" style={{ backgroundColor: "#d0e7ff" }}>
                <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-4">
                INTEGRATION WITH THE APPS YOU ALREADY USE
                </button>

      <p className="mb-10 text-gray-500 font-medium mx-8">
        Maximize Efficiency by Seamlessly Integrating with Your Essential Applications
      </p>  

      <Slider {...settings}>
        {apps.map((app, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
          >
            <p className="font-bold text-[#1a75bb] text-3xl">
              {app}
            </p>
          </div>
        ))}
      </Slider>

      <div className="flex justify-center gap-8 mt-12 mx-8">
        <button className="bg-[#1a75bb] text-white rounded-md px-8 py-3 text-sm font-medium">
          Request a Call Back Today
        </button>
      </div>
    </div>
  );
};

export default SixthSection;
