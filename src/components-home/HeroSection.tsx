import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesData = [
  {
    id: 1,
    headline: ["Assisting your Business with", "Customized Tech Solutions"],
    supportingText: "Let's bring life to your business with our technical and marketing solutions",
    buttons: [
      { text: "Get Started", variant: "contained" },
      { text: "Learn More", variant: "outlined" },
    ],
  },
  {
    id: 2,
    headline: ["Transforming Ideas into", "Innovative Products"],
    supportingText: "We turn your ideas into reality with seamless development and design",
    buttons: [
      { text: "Start Your Journey", variant: "contained" },
      { text: "Discover More", variant: "outlined" },
    ],
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide) => (
        <div
          key={slide.id}
          className="h-[36rem] relative px-32 py-8 flex items-center bg-[#d0e7ff]"
        >
          <div className="max-w-[50%] my-20">
            <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-12">
              YOUR PARTNER IN IT AND DIGITAL MARKETING SOLUTIONS
            </button>

            <h4 className="font-bold text-4xl mb-6">
              <span className="text-black">{slide.headline[0]}</span>
              <br />
              <span className="text-[#1a75bb] font-bold">{slide.headline[1]}</span>
            </h4>

            <p className="text-base mb-7 text-black">{slide.supportingText}</p>

            <div className="flex gap-2">
              {slide.buttons.map((button, index) => (
                <button
                  key={index}
                  className={`${
                    button.variant === "outlined" ? "text-[#1a75bb] border-[#4bf03b]" : "text-white bg-[#1a75bb]"
                  } border rounded-xl px-4 py-2 text-sm font-medium`}
                >
                  {button.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroSection;
