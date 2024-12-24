import { Business, School, Computer, LocalHospital } from '@mui/icons-material';
import business from '../assets/sector-images/one.png';
import education from '../assets/sector-images/two.png';
import tech from '../assets/sector-images/three.png';
import health from '../assets/sector-images/four.png';

const FifthSection = () => {
    return (
        <div className="py-12">
            <div className="flex flex-col items-center justify-center mb-6">
                <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium">
                    ENHANCE YOUR BUSINESS WITH OUR SOLUTION
                </button>
                <p className="text-black font-medium py-6">
                    Transforming Your Vision into Reality with Expert Execution and Tailored Solutions.
                </p>
            </div>

            <div className="w-full max-w-6xl mx-auto">
                <div className="grid grid-cols-4">
                    <div className="flex flex-col items-start border border-gray-300 p-5">
                        <Business className="text-9xl text-[#1a75bb] mb-4 animate-bounce" />
                        <p className="text-2xl font-semibold text-black">Business</p>
                    </div>
                    <div className="flex flex-col items-start border border-gray-300 p-5">
                        <School className="text-9xl text-[#1a75bb] mb-4 animate-bounce" />
                        <p className="text-2xl font-semibold text-black">Education</p>
                    </div>
                    <div className="flex flex-col items-start border border-gray-300 p-5">
                        <Computer className="text-9xl text-[#1a75bb] mb-4 animate-bounce" />
                        <p className="text-2xl font-semibold text-black">Tech</p>
                    </div>
                    <div className="flex flex-col items-start border border-gray-300 p-5">
                        <LocalHospital className="text-9xl text-[#1a75bb] mb-4 animate-bounce" />
                        <p className="text-2xl font-semibold text-black">Healthcare</p>
                    </div>
                </div>
                
                <div className="grid grid-cols-4">
                    <div className="flex flex-col items-center border border-gray-300">
                        <img
                            src={business}
                            alt="Business"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-center border border-gray-300">
                        <img
                            src={education}
                            alt="Education"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-center border border-gray-300">
                        <img
                            src={tech}
                            alt="Tech"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                    <div className="flex flex-col items-center border border-gray-300">
                        <img
                            src={health}
                            alt="Healthcare"
                            className="w-full h-auto object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FifthSection;
