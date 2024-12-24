import testimonial from "../assets/images/testimonial-cover.jpg";
import profile from "../assets/images/profile.png";
import logo from "../assets/logo-small.png";
import OpenInNewIcon from '@mui/icons-material/OpenInNew'; 

const EigthSection = () => {
  return (
    <div className="px-24 relative">
      <div className="absolute left-0 bottom-1 w-full -z-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-[600px]" 
          preserveAspectRatio="none"
        >
          <path
            fill="#d0e7ff"
            fillOpacity="1"
            d="M0,0 Q720,160 1440,0 L1440,320 L0,320 Z"
          />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-center mb-6">
        <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-4">
          TRANSFORMATIVE FOR EVERY TEAM ENVIRONMENT
        </button>

        <p className="mb-10 text-gray-500 font-medium mx-8 text-center" style={{ lineHeight: "1.2" }}>
          Jumpstart your projects with ready-to-use solutions.
          <br />
          Effortlessly tailor TekGro to match your team's evolving needs
        </p>
      </div>

      <div className="relative">
        <div
          className="w-full h-[400px] bg-cover bg-center rounded-t-lg"
          style={{ backgroundImage: `url(${testimonial})` }}
        ></div>
      </div>

      <div className="relative flex justify-center items-start">
        <div className="w-1/3 bg-white p-4 flex items-start border-b-2 rounded-bl-lg">
          <div className="pr-4 pl-6">
            <img src={profile} alt="Profile" className="w-20 h-20 rounded-full" />
          </div>
          <div className="flex-1 pl-6">
            <p className="font-semibold text-lg">John Doe</p>
            <p className="text-gray-500 text-sm">Product Manager at Google</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-gray-400 text-sm">5-Star Review</span>
            </div>
          </div>
        </div>

        <div className="relative bg-white rounded-lg p-6 scale-110 z-10 w-1/3 border-2 bottom-36">
          <div className="text-5xl text-[#1a75bb] mb-4 text-center">❝</div>

          <div className="text-center mb-4 text-gray-600">
            <p>
              "We look forward to supercharging the next phase of our
              growth with optimism and confidence, ready to seize the
              many opportunities ahead. Our growth strategy for the
              emerging digital future is built on five strategic
              objectives."
            </p>
          </div>

          <div className="w-full border-t-2 border-[#1a75bb] mb-4"></div>

          <div className="flex items-start pl-6">
            <div className="pr-4">
              <img src={profile} alt="Profile" className="w-20 h-20 rounded-full" />
            </div>
            <div className="flex-1 text-left pl-6">
              <p className="font-semibold text-lg">Jane Smith</p>
              <p className="text-gray-500 text-sm">Lead Designer at Adobe</p>
              <div className="flex items-center justify-start mt-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="ml-2 text-gray-400 text-sm">5-Star Review</span>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/3 bg-white p-4 flex items-start border-b-2 rounded-br-lg">
          <div className="pr-4 pl-6">
            <img src={profile} alt="Profile" className="w-20 h-20 rounded-full" />
          </div>
          <div className="flex-1 pl-6">
            <p className="font-semibold text-lg">Sam Wilson</p>
            <p className="text-gray-500 text-sm">CEO at Microsoft</p>
            <div className="flex items-center mt-2">
              <span className="text-yellow-500">★★★★★</span>
              <span className="ml-2 text-gray-400 text-sm">5-Star Review</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 pb-12">
        <p className="mr-2 text-gray-500">See all reviews?</p>
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

export default EigthSection;
