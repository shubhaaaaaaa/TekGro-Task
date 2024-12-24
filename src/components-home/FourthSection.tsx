const FourthSection = () => {
    return (
      <div
        className="my-10 h-[36rem] relative bg-[#d0e7ff] px-32 py-8 flex items-center"
        style={{
          background:
            'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27 preserveAspectRatio=%27none%27%3E%3Cpath d=%27M0,0 Q50,20 100,0 L100,100 Q50,80 0,100 Z%27 fill=%27%23d0e7ff%27 /%3E%3C/svg%3E") no-repeat center center / cover',
        }}
        >
            
        <div className="relative z-10 flex items-center  gap-28 w-full">
          <div className="left-side w-1/2">
            <h1 className="text-black font-bold text-3xl mb-4">Expert Custom</h1>
            <h2 className="text-[#1a74ba] font-bold text-2xl mb-6">Gain a Heading</h2>
            <p className="text-gray-600 text-base mb-6">
              At TekGro, we specialize in crafting custom software solutions tailored to your unique business needs. Our experienced team collaborates closely with you to understand your objectives, ensuring that every application we develop is robust, scalable, and aligned with your vision. We prioritize a collaborative approach, integrating your feedback throughout the process. Whether you need a bespoke application or ongoing support, our commitment to quality and innovation ensures you receive impactful solutions that drive efficiency and growth. Partner with us to transform your ideas into reality.
            </p>
          </div>
  
          <div className="right-side w-1/4 bg-[#e4effb] p-4 rounded-lg shadow-lg mt-10">
            <h2 className="font-bold text-xl text-center mb-3">Talk to Our Experts Now</h2>
            <p className="text-xs text-center mb-4">
              Refine your concept with insights from industry experts. Let’s ensure your vision is on the right track!
            </p>
  
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  className="w-full p-1 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full p-1 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Mobile Number"
                  className="w-full p-1 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  placeholder="Your message"
                  className="w-full p-1 border border-gray-300 rounded-md text-sm"
                />
              </div>
  
              <button
                type="submit"
                className="bg-[#1a75bb] text-white p-2 w-full rounded-md text-sm"
              >
                Book Your Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default FourthSection;
  