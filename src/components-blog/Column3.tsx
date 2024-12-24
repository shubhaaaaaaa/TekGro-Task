import image from '../assets/sector-images/one.png';
import { Facebook, LinkedIn, Instagram, WhatsApp, Mail, LocationOn } from '@mui/icons-material';
import profile from '../assets/images/profile.png';

const Column3 = () => {
  return (
    <div className="space-y-8 w-[250px]">
      <div className="flex bg-transparent border border-gray-300 p-4 rounded-lg">
        <div className="w-32 h-32 rounded-full mr-2 mt-1">
          <img src={profile} alt="Founder" className='rounded-full'/>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold text-gray-800">Matrika Shah</h2>
          <p className="text-xs text-gray-600">Founder of Tekgro Nepal</p>
          <p className="text-xs text-gray-600 mt-2">
            The Wall Street Journal calls him a top influencer on the web, Forbes says he is one of the top 10 marketers,
            and Entrepreneur Magazine says he created one of the 100 most brilliant companies.
          </p>
          <div className="flex flex-col space-y-3 mt-3">
            <div className="flex items-center text-xs text-gray-600">
              <LocationOn className="text-blue-600 text-sm" />
              <span className="ml-1">Sydney, Australia</span>
            </div>
            <div className="flex space-x-3">
              <Facebook className="text-blue-600" fontSize="small" />
              <LinkedIn className="text-blue-600" fontSize="small" />
              <Instagram className="text-blue-600" fontSize="small" />
              <WhatsApp className="text-blue-600" fontSize="small" />
              <Mail className="text-blue-600" fontSize="small" />
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-md font-bold text-gray-800">Featured Post</h3>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={image} alt="Featured Post" className="w-full h-20 object-cover" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-md font-bold text-gray-800">What Service Do You Require?</h3>
        <p className="text-xs text-gray-600">Select Services You May Need.</p>
        <div className="grid grid-cols-2 gap-3">
          <button className="border border-gray-300 px-3 py-1 rounded-lg text-xs text-gray-800 hover:bg-gray-100">
            Full Stack Team
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg text-xs text-gray-800 hover:bg-gray-100">
            Development
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg text-xs text-gray-800 hover:bg-gray-100">
            Product Design
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg text-xs text-gray-800 hover:bg-gray-100">
            Digital Marketing
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg text-xs text-gray-800 hover:bg-gray-100">
            Data/ML/AI
          </button>
          <button className="border border-gray-300 px-3 py-1 rounded-lg text-xs text-gray-800 hover:bg-gray-100">
            Others
          </button>
        </div>
      </div>
    </div>
  );
};

export default Column3;
