import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from '../assets/hero-section/one.png'
import image2 from '../assets/hero-section/two.png'
import image3 from '../assets/hero-section/one.png'

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
  };

  return (
    <Slider {...settings}>
      {slidesData.map((slide) => (
        <Box
          key={slide.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "70vh",
            backgroundColor: "#d0e7ff",
            padding: "0 5%",
          }}
        >
          <Box sx={{
            maxWidth: "50%",
            marginY: '5rem'
          }}>
            <Button
              variant="outlined"
              sx={{
                color: "#1a75bb",
                border: "2px solid transparent",
                borderImage: "linear-gradient(to right, #1a75bb, #4ffd3f) 1",
                mb: 6,
                padding: "6px 14px",
                borderRadius: "30px",
              }}
            >
              Explore Solutions
            </Button>

            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                mb: 3,
              }}
            >
              <span style={{ color: "black" }}>{slide.headline[0]}</span>
              <br />
              <span style={{ color: "#1a75bb", fontWeight: "bold" }}>
                {slide.headline[1]}
              </span>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                mb: 7,
                color: "#1a75bb",
              }}
            >
              {slide.supportingText}
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              {slide.buttons.map((button, index) => (
                <Button
                  key={index}
                  variant={button.variant}
                  sx={{
                    color: button.variant === "outlined" ? "#1a75bb" : "white",
                    borderColor: "#4bf03b",
                    backgroundColor: button.variant === "contained" ? "#1a75bb" : "transparent",
                    borderRadius: "10px",
                    padding: "6px 12px",
                    fontSize: "0.8rem",
                    textTransform: button.variant === "contained" ? "none" : "none",
                    fontWeight: button.variant === "outlined" ? "bold" : "normal",
                    boxShadow: button.variant === "contained" ? "none" : "initial",
                  }}
                >
                  {button.text}
                </Button>
              ))}
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              backgroundImage: "url('https://www.stickpng.com/assets/images/5a8b8b8b8b8b8b8b8b8b8b8b.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100%",
              borderRadius: "10px",
            }}
          />
        </Box>
      ))}
    </Slider>
  );
};

export default HeroSection;
