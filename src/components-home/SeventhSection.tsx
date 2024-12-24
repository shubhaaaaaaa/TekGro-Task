import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import cardImage from '../assets/images/card-image.jpg';

const services = [
  { 
    title: "Mobile App Development", 
    details: "Develop innovative apps, engage users, and drive growth effortlessly with our expert mobile development services.",
    image: cardImage
  },
  { 
    title: "Website Development", 
    details: "Innovate stunning websites, optimize performance, and enhance user engagement effortlessly with our expert development services.",
    image: cardImage
  },
  { 
    title: "UI/UX Design", 
    details: "Transform captivating interfaces, optimize usability, and elevate brand experience effortlessly with our UI/UX design service.",
    image: cardImage
  },
  { 
    title: "IT Consulting", 
    details: "Streamline operations effectively, improve security, and leverage technology seamlessly with our comprehensive IT consulting services.",
    image: cardImage
  },
  { 
    title: "Tech Support", 
    details: "Resolve issues swiftly, ensure system reliability, and provide expert guidance effortlessly with our dedicated tech support team.",
    image: cardImage
  }
];

const SeventhSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    nextArrow: (
      <button className="absolute right-0 top-1/2 transform -translate-y-1/2 p-5 text-[#1a75bb] bg-transparent border-none z-20">
        <ChevronRight className="text-6xl" />
      </button>
    ),
    prevArrow: (
      <button className="absolute left-0 top-1/2 transform -translate-y-1/2 p-5 text-[#1a75bb] bg-transparent border-none z-20">
        <ChevronLeft className="text-6xl" />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
    <div className="pb-24 px-8">
      <div className="flex flex-col items-center justify-center mb-6">
        <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-4">
          MAXIMIZE EFFICIENCY ON YOUR PATH TO DIGITAL TRANSFORMATION
        </button>

        <p className="mb-10 text-gray-500 font-medium mx-8">
          Drive Results and Transform Industries with Our Innovative Digital Solutions and Platforms
        </p>  
      </div>

      <div className="relative px-12">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="relative h-[400px] w-[220px] border border-gray-300 bg-[#262628] rounded-lg overflow-hidden transition-all duration-300 group"
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              <div className="absolute inset-x-0 top-6 px-4 text-white z-10 text-shadow-lg">
                <p className="text-xl font-semibold">{service.title}</p>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-base pb-12 drop-shadow-lg">{service.details}</p>
              </div>

              <div className="absolute inset-x-0 top-0 h-[80px] bg-gradient-to-b from-black/50 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SeventhSection;
