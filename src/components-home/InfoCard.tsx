import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import ChatIcon from '@mui/icons-material/Chat';

const InfoCard = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <div className="bg-[#d0e7ff] rounded-md h-[10rem] w-3/4 flex items-center px-12">
        <div className="flex flex-col justify-center mr-8">
          <h1 className="text-[#1a75bb] text-xl font-bold pb-4 w-3/4">
            Build business resilience & thrive in an era of change
          </h1>
          <p className="text-gray-500 text-sm">Get expert advice anytime for anything you need</p>
        </div>

        <div className="flex space-x-8">
          <div className="flex items-center space-x-4">
            <PhoneIcon className="text-[#1a75bb]" />
            <div>
              <p className="font-bold text-[#1a75bb]">Phone</p>
              <p className="text-sm text-gray-500">7am - 4pm (AI-JS)</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <EmailIcon className="text-[#1a75bb]" />
            <div>
              <p className="font-bold text-[#1a75bb]">Email</p>
              <p className="text-sm text-gray-500">Advanced Support</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <ChatIcon className="text-[#1a75bb]" />
            <div>
              <p className="font-bold text-[#1a75bb]">Chat</p>
              <p className="text-sm text-gray-500">Q Live with Us</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
