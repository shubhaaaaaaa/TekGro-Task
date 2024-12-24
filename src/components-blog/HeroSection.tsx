import profileImage from "../assets/images/profile.png"; 
import heroImage from "../assets/blog/hero-section.png";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-between h-[36rem] px-16 bg-[#eff3f6]">
      {/* Left Side: Image */}
      <div className="h-full w-[50%] flex items-center justify-center">
        <img
          src={heroImage}
          alt="Cybersecurity Illustration"
          className="h-[80%] w-auto object-contain"
        />
      </div>

      {/* Right Side: Text Content */}
      <div className="flex flex-col max-w-[50%]">
        {/* Tag */}
        <div className="text-[#1a75bb] font-medium text-sm mb-4">CYBERSECURITY</div>

        {/* Heading */}
        <h1 className="text-black text-4xl font-bold mb-6 leading-[1.3]">
          AI-Powered Cybersecurity: The Future of Digital Defense
        </h1>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="border-2 border-[#39cf2b] text-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium">
            Transformation
          </button>
          <button className="border-2 border-[#39cf2b] text-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium">
            Machine Learning
          </button>
        </div>

        {/* Info Section */}
        <div className="flex items-center text-sm text-gray-600">
          {/* Profile Picture */}
          <div className="mr-4">
            <img
              src={profileImage}
              alt="Profile"
              className="h-12 w-12 rounded-full object-cover"
            />
          </div>

          {/* Info Text */}
          <div>
            {/* First Line */}
            <div className="font-semibold text-black">
              Adam Park, <span className="font-normal text-gray-600">Content Creator Influencer • 7 Min Read</span>
            </div>

            {/* Second Line */}
            <div className="text-gray-600">
              Posted Date: <span className="font-semibold">21st January</span> • Updated Date: <span className="font-semibold">1st March 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
