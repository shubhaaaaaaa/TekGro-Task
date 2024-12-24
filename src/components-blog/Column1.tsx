import logo from "../assets/logo-small.png";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube,
  GitHub,
} from "@mui/icons-material";

const Column1 = () => {
  return (
    <div className="p-6 space-y-6 w-[300px]">
      <div className="bg-[#dcf0ff] shadow-md rounded-lg p-4">
        <h2
          className="text-lg font-bold mb-4 bg-white"
          style={{
            background: "linear-gradient(to right, #1a75bb, #11be09)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
          Table Of Content
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="pb-2 border-b border-gray-300 last:border-none text-xs">
            Introduction: The Rise of AI in Cybersecurity
          </li>
          <li className="pb-2 border-b border-gray-300 last:border-none text-xs">
            AI's Role in Threat Detection and Prevention
          </li>
          <li className="pb-2 border-b border-gray-300 last:border-none text-xs">
            Automating Incident Response with AI
          </li>
          <li className="pb-2 border-b border-gray-300 last:border-none text-xs">
            Enhancing Threat Intelligence with AI
          </li>
          <li className="pb-2 border-b border-gray-300 last:border-none text-xs">
            AI-Driven Security Automation: A Double-Edged Sword?
          </li>
          <li className="pb-2 border-b border-gray-300 last:border-none text-xs">
            Conclusion: A Powerful Tool for the Future of Cybersecurity
          </li>
        </ul>
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        <div className="bg-white text-[#1a75bb] rounded-full p-2 shadow-md hover:bg-[#1a75bb] hover:text-white">
          <Facebook fontSize="small" />
        </div>
        <div className="bg-white text-[#1a75bb] rounded-full p-2 shadow-md hover:bg-[#1a75bb] hover:text-white">
          <Twitter fontSize="small" />
        </div>
        <div className="bg-white text-[#1a75bb] rounded-full p-2 shadow-md hover:bg-[#1a75bb] hover:text-white">
          <LinkedIn fontSize="small" />
        </div>
        <div className="bg-white text-[#1a75bb] rounded-full p-2 shadow-md hover:bg-[#1a75bb] hover:text-white">
          <Instagram fontSize="small" />
        </div>
        <div className="bg-white text-[#1a75bb] rounded-full p-2 shadow-md hover:bg-[#1a75bb] hover:text-white">
          <YouTube fontSize="small" />
        </div>
        <div className="bg-white text-[#1a75bb] rounded-full p-2 shadow-md hover:bg-[#1a75bb] hover:text-white">
          <GitHub fontSize="small" />
        </div>
      </div>

      <div className="space-y-8 px-4">
        <div className="bg-[#dcf0ff] rounded-lg">
          <div className="flex justify-center">
            <img src={logo} alt="logo" width={120} />
          </div>
          <div className="bg-white py-2 text-center mb-4">
            <h3 className="text-sm font-bold text-gray-800">
              Get 10% Off On Any Course
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center justify-center py-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1a75bb] text-white flex items-center justify-center mb-4">
                <span className="material-icons text-sm">icon</span>
              </div>
              <p className="text-center text-xs font-medium text-gray-800">
                Frontend with React
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1a75bb] text-white flex items-center justify-center mb-4">
                <span className="material-icons text-sm">icon</span>
              </div>
              <p className="text-center text-xs font-medium text-gray-800">
                Python & Django Training
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1a75bb] text-white flex items-center justify-center mb-4">
                <span className="material-icons text-sm">icon</span>
              </div>
              <p className="text-center text-xs font-medium text-gray-800">
                App Development
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1a75bb] text-white flex items-center justify-center mb-4">
                <span className="material-icons text-sm">icon</span>
              </div>
              <p className="text-center text-xs font-medium text-gray-800">
                WordPress Development
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1a75bb] text-white flex items-center justify-center mb-4">
                <span className="material-icons text-sm">icon</span>
              </div>
              <p className="text-center text-xs font-medium text-gray-800">
                Fullstack Development
              </p>
            </div>

            <div className="flex flex-col items-center justify-center py-4 rounded-lg shadow-sm">
              <div className="w-10 h-10 rounded-full bg-[#1a75bb] text-white flex items-center justify-center mb-4">
                <span className="material-icons text-sm">icon</span>
              </div>
              <p className="text-center text-xs font-medium text-gray-800">
                UI/UX Training
              </p>
            </div>
          </div>
        </div>

        <button className="bg-[#1a75bb] text-white px-6 py-3 rounded-lg hover:bg-[#39cf2b] transition font-medium w-full text-sm">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Column1;
