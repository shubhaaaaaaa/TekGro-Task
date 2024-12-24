import image from "../assets/images/image.png";

const TenthSection = () => {
  return (
    <div className="px-32 ">
      <div className="flex flex-wrap md:flex-nowrap items-center gap-8 rounded-xl">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden">
          <img src={image} alt="Solutions Illustration" className="rounded-xl shadow-lg" />
        </div>

        <div className="w-full md:w-1/2">
          <div className="flex justify-center mb-6">
            <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-6">
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
          <button className="text-[#1a75bb] border border-[#39cf2b] rounded-md px-6 py-2 text-sm font-medium mb-6">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default TenthSection;
