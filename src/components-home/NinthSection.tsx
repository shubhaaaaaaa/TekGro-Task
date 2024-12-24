import {
    ExploreOutlined as ExploreOutlineIcon,
    QuestionAnswerOutlined as QuestionAnswerOutlineIcon,
    ShareOutlined as ShareOutlineIcon,
    ArrowForwardOutlined as ArrowForwardIcon,
    FavoriteBorder as LikeIcon,
    CommentOutlined as CommentIcon
  } from "@mui/icons-material";
    
  import blogImage from '../assets/images/blog.jpg'; 
  import logo from "../assets/logo.png";
  import OpenInNewIcon from '@mui/icons-material/OpenInNew';
    
  const NinthSection = () => {
    return (
      <div className="px-28 my-20">
        <div className="flex flex-col items-center justify-center">
          <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-6">
            TEKGRO WORKSHOP
          </button>
          <p className=" text-gray-500 font-medium mx-8 text-center">
            Engaging Discussions and Expert Insights to Empower Your Journey in
            the Ever-Evolving Tech Landscape
          </p>
        </div>
  
        <div className="flex items-center justify-center gap-16 py-6">
          <div className="flex items-center justify-center gap-3">
            <ExploreOutlineIcon className="text-[#1a75bb] text-4xl" />
            <p className="text-gray-600">Get Inspired</p>
          </div>
  
          <div className="flex items-center justify-center gap-3">
            <QuestionAnswerOutlineIcon className="text-[#1a75bb] text-4xl" />
            <p className="text-gray-600">Ask Questions</p>
          </div>
  
          <div className="flex items-center justify-center gap-3">
            <ShareOutlineIcon className="text-[#1a75bb] text-4xl" />
            <p className="text-gray-600">Share Projects</p>
          </div>
        </div>
  
        <div className="w-full h-[1px] bg-gradient-to-r from-[#1a75bb] to-[#4ffd3f] mb-6"></div>
  
        <div className="grid grid-cols-3 gap-12">
          <div className="rounded-lg shadow-lg max-w-sm bg-[#e3effb] ">
            <div
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage})`,
              }}></div>
            <div className="px-6 py-1">
              <h3 className="text-black text-xl font-semibold my-4">
                The Untapped Power of Email Signatures in Digital Marketing
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 my-4">
                <span>Posted by Noah Smith</span>
                <div className="flex items-center gap-2">
                  <LikeIcon className="text-[#1a75bb]" />
                  <span>45</span>
                  <CommentIcon className="text-[#1a75bb]" />
                  <span>12</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Power of Email Signatures in Digital Marketing. Description of the untapped potential of email signatures.
              </p>
              <div className="flex items-center gap-2 text-[#1a75bb] font-medium">
              <a href="/blog"  className="hover:underline cursor-pointer">Learn More</a>
              <ArrowForwardIcon />
              </div>
            </div>
          </div>
  
          <div className="rounded-lg shadow-lg max-w-sm bg-[#e3effb] ">
            <div
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage})`,
              }}></div>
            <div className="px-6 pb-6">
              <h3 className="text-black text-xl font-semibold my-4">
                The Untapped Power of Email Signatures in Digital Marketing
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 my-4">
                <span>Posted by Noah Smith</span>
                <div className="flex items-center gap-2">
                  <LikeIcon className="text-[#1a75bb]" />
                  <span>45</span>
                  <CommentIcon className="text-[#1a75bb]" />
                  <span>12</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Power of Email Signatures in Digital Marketing. Description of the untapped potential of email signatures.
              </p>
              <div className="flex items-center gap-2 text-[#1a75bb] font-medium">
              <a href="/blog"  className="hover:underline cursor-pointer">Learn More</a>
              <ArrowForwardIcon />
              </div>
            </div>
          </div>
  
          <div className="rounded-lg shadow-lg max-w-sm bg-[#e3effb] ">
            <div
              className="h-48 bg-cover bg-center rounded-t-lg"
              style={{
                backgroundImage: `url(${blogImage})`,
              }}></div>
            <div className="px-6 pb-6">
              <h3 className="text-black text-xl font-semibold my-4">
                The Untapped Power of Email Signatures in Digital Marketing
              </h3>
              <div className="flex items-center justify-between text-xs text-gray-500 my-4">
                <span>Posted by Noah Smith</span>
                <div className="flex items-center gap-2">
                  <LikeIcon className="text-[#1a75bb]" />
                  <span>45</span>
                  <CommentIcon className="text-[#1a75bb]" />
                  <span>12</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Power of Email Signatures in Digital Marketing. Description of the untapped potential of email signatures.
              </p>
              <div className="flex items-center gap-2 text-[#1a75bb] font-medium">
                <a href="/blog"  className="hover:underline cursor-pointer">Learn More</a>
                <ArrowForwardIcon />
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 py-12">
          <p className="mr-2 font-semibold">Join the discussion?</p>
          <img src={logo} alt="Logo" className="w-20" />
          <a
            href="#"
            className="text-gray-500"
            aria-label="Open in a new window"
          >
            <OpenInNewIcon className="text-gray-400" />
          </a>
        </div>
      </div>
    );
  };
    
  export default NinthSection;
  