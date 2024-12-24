import SettingsIcon from '@mui/icons-material/Settings';

const ThirdSection = () => {
  return (
    <div className='my-20'>
      <div className="flex items-center justify-center mb-12">
        <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium">
          ENHANCE YOUR BUSINESS WITH OUR SOLUTION
        </button>
      </div>

      <div className="flex justify-center space-x-6 mb-8">
        <div className="flex flex-col items-center bg-white border border-gray-500 rounded-md w-20 p-3 box-border">
          <SettingsIcon className="text-xl text-[#1a75bb]" />
          <p className="mt-1 text-xs text-[#1a75bb]">CRMS</p>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-500 rounded-md w-20 p-3 box-border">
          <SettingsIcon className="text-xl text-[#1a75bb]" />
          <p className="mt-1 text-xs text-[#1a75bb]">LMS</p>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-500 rounded-md w-20 p-3 box-border">
          <SettingsIcon className="text-xl text-[#1a75bb]" />
          <p className="mt-1 text-xs text-[#1a75bb]">SMS</p>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-500 rounded-md w-20 p-3 box-border">
          <SettingsIcon className="text-xl text-[#1a75bb]" />
          <p className="mt-1 text-xs text-[#1a75bb]">BWMS</p>
        </div>
        <div className="flex flex-col items-center bg-white border border-gray-500 rounded-md w-20 p-3 box-border">
          <SettingsIcon className="text-xl text-[#1a75bb]" />
          <p className="mt-1 text-xs text-[#1a75bb]">ERP</p>
        </div>
      </div>

      {/* Headin  */}
      <div className="flex mb-12 w-1/2 mx-auto">
      <div className="flex items-center justify-center bg-white border-4 border-lightgreen-500 rounded-full p-1">
        <div className="flex items-center justify-center bg-green-500 border border-white rounded-full p-1">
          <SettingsIcon className="text-2xl text-white" />
        </div>
      </div>
      <div className="flex flex-col ml-4">
        <p className="text-xl font-bold text-black">Customer Relation Management System (CRMS)</p>
        <p className="text-sm text-gray-600 mt-1">Organize your leads, monitor sales, and nurture customer relationships seamlessly with our all-in-one CRM.</p>
      </div>
    </div>

      {/* Bento box */}

      <div className="grid grid-cols-2 gap-6 w-1/2 mx-auto mb-6">
        <div className="flex flex-col items-center bg-[#a1d2ce] border rounded-md p-6 box-border h-52">
          <p className="font-bold text-sm text-black">Set Your Priority</p>
        </div>

        <div className="flex flex-col items-center bg-[#a8b6e5] border rounded-md p-6 box-border">
          <p className="font-bold text-sm text-black">Client & Team Collaboration</p>
          <p className="text-xs text-gray-600 mt-1 text-center px-5 pt-4">Add multiple users to boost collaboration & keep them updated on progress.</p>
        </div>
      </div>

      <div className="flex w-1/2 mx-auto mb-6">
        <div className="flex flex-col bg-[#eab5b5] border rounded-md p-6 box-border w-full h-28">
          <p className="text-sm text-black font-bold">Track your progress to improve workflow</p>
          <p className="text-xs text-gray-600 mt-1">Stay on top of your tasks and optimize your workflow with real-time tracking.</p>
        </div>
      </div>

    </div>
  );
};

export default ThirdSection;
