import image from "../assets/images/code.png";

const SecondSection = () => {
  return (
    <div className="bg-[#d0e7ff] p-8 px-32">
      <div className="text-center my-10">
        <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-6">
          BRIDGING IDEAS AND EXECUTION WHERE CREATIVITY MEETS CODE
          </button>
        <p className="text-gray-500 font-medium">
          Transforming Your Vision into Reality with Expert Execution and Tailored Solutions.
        </p>
      </div>

      <div className="flex justify-between items-center gap-8">
        {/* Column 1 */}
        <div className="w-1/2">
          <h2 className="text-black font-bold text-2xl mb-4">Develop Your Custom</h2>
          <h2 className="text-[#1a75bb] font-bold text-2xl mb-6">Custom Software Developer</h2>
          <p className="text-gray-600 text-base mb-6 w-3/4">
            We navigate digital solutions to make your work smooth and faster to compete in this highly
            competitive world. Beyond providing IT and digital marketing services, we create enduring
            alliances that help your company grow to new heights.
          </p>
          <div className="flex gap-8 mt-8">
            <button className="bg-[#1a75bb] text-white rounded-md px-8 py-3 text-sm font-medium">
              Explore our Docs
            </button>
            <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-8 py-3 text-sm font-medium">
              Sign Up
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-1/2">
          <img src={image} alt="code illustration" className="rounded-md shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
