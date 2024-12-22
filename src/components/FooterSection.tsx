import { Box, Typography } from "@mui/material";
import logo from '../assets/logo-footer.png';
import icon from '../assets/icons.png';

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Check,
  Cancel,
  Language,
} from "@mui/icons-material";

export const FooterSection = () => {
  return (
    <Box className="bg-[#d0e7ff] text-black py-8 px-20">
      <Box className="flex justify-start gap-24 px-4 md:px-8 border-b border-gray-300 mt-5">
        <Box>
          <img
            src={logo}
            alt="Logo"
            className="h-20"
          />
        </Box>
        <Box className="w-3/4 flex items-center">
          <Typography variant="body2" className="text-gray-600 text-md w-3/4">
          TekGro, Where Innovation Meets Excellence In IT Solutions. We Are A Dynamic IT Company Dedicated To Providing
            Comprehensive Business Solutions Through Software Development, Website Design, E-Commerce Solutions, Digital
            Marketing, And Branding Services.
          </Typography>
        </Box>
      </Box>

      <hr className="my-8 border-[#5cac73]" />

      <Box className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-8 pb-8">
        <Box>
          <Typography className="font-bold text-lg pb-4 text-left">
            Contact TekGro
          </Typography>
          <ul className="text-gray-600  space-y-2 text-left">
            <li>
              Brisbane Office
              <br />
              ABN: 52631 588611
              <br />
              0481 967 363
              <br />
              support@tekgro.au
              <br />
              43 Cremin Street, Brisbane
            </li>

            <br />
            <li>
              Nepal Office
              <br />
              98-00000000
              <br />
              Support@Tekgro.Au
              <br />
              Shantinagar, Baneshwor
            </li>
          </ul>
        </Box>

        <Box>
          <Typography className="font-bold text-lg pb-4 text-left">
            Solutions
          </Typography>
          <ul className="text-gray-600  space-y-2 text-left">
            <li>Software Development</li>
            <li>Web Development</li>
            <li>ECommerce</li>
            <li>Mobile App Development</li>
            <li>Digital Marketing</li>
            <br />
            <Typography className="font-bold text-lg pb-4 text-left">
              Products
            </Typography>
            <li>College Management System</li>
            <li>Student Management System</li>
            <li>Learning Management System</li>
            <li>Salon & Spa Management System</li>
            <li>Corporate Management System</li>
            <li>Agency Management System</li>
          </ul>
        </Box>

        <Box>
          <Typography className="font-bold text-lg pb-4 text-left">
            Technology
          </Typography>
          <ul className="text-gray-600  space-y-2 text-left">
            <li>Shopify</li>
            <li>Laravel</li>
            <li>HTML / CSS</li>
            <li>Python</li>
            <li>Django</li>
            <li>PHP</li>
            <li>Salesforce</li>
            <li>Xero</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Figma</li>
            <li>Adobe Creative Cloud</li>
          </ul>
        </Box>

        <Box>
          <Typography className="font-bold text-lg pb-4 text-left">
            Company
          </Typography>
          <ul className="text-gray-600  space-y-2 text-left">
            <li>About Us</li>
            <li>How We Work</li>
            <li>Client Stories</li>
            <li>Careers</li>
            <li>Corporate Social Responsibility</li>
            <br />
            <Typography className="font-bold text-lg pb-4 text-left">
              Resources
            </Typography>
            <li>Blogs</li>
            <li>Videos</li>
            <li>Ebooks</li>
            <li>Case Study</li>
            <li>Learn</li>
          </ul>
        </Box>
      </Box>

      <Box className="flex justify-center items-center space-x-5 mt-12">
  <Box className="flex items-center space-x-3">
    <Language sx={{ fontSize: 16, color: "gray" }} />
    <Typography sx={{ fontSize: 14, color: "gray" }}>English (United States)</Typography>

    <Box
      sx={{
        display: "flex",
        width: "60px", 
        height: "24px", 
        borderRadius: "12px",
        border: "1px solid #1a75bb",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          width: "50%",
          backgroundColor: "#1a75bb",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "12px 0 0 12px",
        }}
      >
        <Check sx={{ color: "white", fontSize: 14 }} /> 
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "0 12px 12px 0",
        }}
      >
        <Cancel sx={{ color: "#1a75bb", fontSize: 14 }} />
      </Box>
    </Box>
  </Box>

  {/* Social Media Icons */}
  <Facebook sx={{ fontSize: 18, color: "#1a75bb" }} />
  <Twitter sx={{ fontSize: 18, color: "#1a75bb" }} />
  <Instagram sx={{ fontSize: 18, color: "#1a75bb" }} />
  <LinkedIn sx={{ fontSize: 18, color: "#1a75bb" }} />

  {/* Footer Text */}
  <Typography sx={{ fontSize: 14, color: "gray" }}>
    © 2024 Your Company. All Rights Reserved.
  </Typography>

  {/* Footer Links */}
  <Box className="flex space-x-2">
    <Typography sx={{ fontSize: 14, color: "gray" }}>Privacy Policy</Typography>
    <Typography sx={{ fontSize: 14, color: "gray" }}>|</Typography>
    <Typography sx={{ fontSize: 14, color: "gray" }}>Terms & Conditions</Typography>
    <Typography sx={{ fontSize: 14, color: "gray" }}>|</Typography>
    <Typography sx={{ fontSize: 14, color: "gray" }}>Disclaimer</Typography>
    <Typography sx={{ fontSize: 14, color: "gray" }}>|</Typography>
    <Typography sx={{ fontSize: 14, color: "gray" }}>Trademarks</Typography>
  </Box>
</Box>



          <hr className="my-8 border-[#5cac73]" />
          
          <Box className="flex justify-center gap-10 px-4 md:px-8">
        <Box>
          <img
            src={icon}
            alt="Logo"
            className="h-16"
          />
        </Box>
        <Box className="w-3/4 flex items-center">
          <Typography variant="body2" className="text-gray-600 text-sm">
          TekGro Recognises The Aboriginal And Torres Strait Islander Peoples As The Traditional Owners Of The Lands On Which We Work, And We Acknowledge
          Those Communities' Continuing Connections To Their Lands, Waters And Cultures. We Pay Our Respects To Their Elders Past And Present.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
