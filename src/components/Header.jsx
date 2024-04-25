import React from "react";

const Header = () => {
  return (
    <>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: "url(./../../../../public/images/more/3.png",
        }}
      >
        <div className=" flex justify-right align-middle">
          <div className="max-w-md ml-[270px]">
            <h1 className="mb-5 text-5xl font-bold text-white w-[700px] font-rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 text-white font-rancho text-base">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] font-rancho font-black text-2xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className=" flex px-[250px] bg-[#ECEAE3] py-8 justify-between gap-10">
        <div>
          <img src="./../../../../public/images/icons/1.png" alt="" className="h-[70px] w-[70px] mb-3" />
          <h3 className="font-rancho text-4xl">Awesome Aroma</h3>
          <p className="font-rancho">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="./../../../../public/images/icons/2.png" alt="" className="h-[70px] w-[70px] mb-3" />
          <h3 className="font-rancho text-4xl">High Quality</h3>
          <p className="font-rancho">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div>
          <img src="./../../../../public/images/icons/3.png" alt="" className="h-[70px] w-[70px] mb-3" />
          <h3 className="font-rancho text-4xl">Pure Grades</h3>
          <p className="font-rancho">We served the coffee to you maintaining the best quality</p>
        </div>
        <div>
          <img src="./../../../../public/images/icons/4.png" alt="" className="h-[70px] w-[70px] mb-3" />
          <h3 className="font-rancho text-4xl">Proper Roasting</h3>
          <p className="font-rancho">Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
    </>
  );
};

export default Header;
