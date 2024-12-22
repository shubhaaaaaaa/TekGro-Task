import image from "../assets/images/image.png";

const Solutions = () => {
  return (
    <div className="bg-[#f0f4fa] p-8 px-20">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8 rounded-xl">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <img src={image} alt="Solutions Illustration" className="rounded-xl shadow-lg" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <button
              className="relative text-[#1a75bb] font-bold rounded-full px-6 py-2 text-sm bg-transparent border-2 mb-6 mt-10"
              style={{
                borderImage: "linear-gradient(to right, #1a75bb, #39cf2b) 1",
              }}
            >
              JOIN US IN MAKING A DIFFERENCE
            </button>
          </div>
          <h2 className="text-black font-bold text-2xl mb-2">Our Commitment to</h2>
          <h2 className="text-[#1a75bb] font-bold text-2xl mb-4">Corporate Responsibility</h2>
          <p className="text-gray-600 text-base mb-4">
            We strongly believe in giving back to the community. Our Corporate Social Responsibility (CSR)
            initiatives focus on supporting education, technology accessibility, and sustainability. We partner
            with local organizations to provide technology resources to underserved communities, ensuring that
            everyone has the opportunity to thrive in a digital world. Our team is also actively involved in
            environmental initiatives, from reducing our carbon footprint to supporting renewable energy
            projects. We believe that a successful business not only delivers value to its clients but also
            contributes positively to society.
          </p>
          <p className="text-gray-600 text-base mb-4">
            Our CSR efforts include:
          </p>
          <ul className="list-disc list-inside text-gray-600 text-base mb-6">
            <li>Tech for All: Donating refurbished technology to schools and nonprofits.</li>
            <li>Green Initiatives: Reducing workplace trash and promoting clean energy projects.</li>
            <li>Employee Volunteering: Encouraging personnel to volunteer in local community projects.</li>
          </ul>
          <button
            className="relative text-[#1a75bb] font-bold rounded-full px-6 py-2 text-sm mt-6 mb-8 bg-transparent border-2"
            style={{
              borderImage: "linear-gradient(to right, #1a75bb, #39cf2b) 1",
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
