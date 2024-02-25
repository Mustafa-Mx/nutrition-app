import React from "react";
import Navbar from "../../components/Navbar";
import veg from "../../assets/images/vegetables.png";
import info from "../../assets/images/info.png";
import Container from "../../components/Container";
import OverlayButton from "../../components/OverlayButton";
import bgMain from '../../assets/images/Main.jpg'
import DarkBg from "../../components/DarkBg";

const Home = () => {
  return (
    <>
    
    <DarkBg background={bgMain}>
      <Container>
        <Navbar />
        <div className="grid grid-cols-2 h-screen">
          <div className="flex flex-col justify-center items-start gap-8 text-white text-left [&>*] px-10 py-3 caret-transparent">
            <p className="capitalize text-7xl text-white font-bold leading-snug ">
              you personalized nutrition diet awaits
            </p>
            <p className="text-2xl font-light">
              Based on your requirments Let's Generate your meal plans
            </p>
            <button className="bg-[#f58820] border hover:border-[#f58820] text-white px-10 py-2 hover:bg-opacity-75 rounded-full">
              Sign Up
            </button>
          </div>
          <div className="grid grid-cols-1 items-stretch">
            <img src={veg} />
          </div>
        </div>
        <div className="grid grid-cols-1 items-center m-2 h-screen">
          <div className="flex justify-center items-center">
            <p className="max-w-[50vw] capitalize text-6xl text-white text-center font-semibold leading-snug ">
              Your meal plan right here in seconds just let us know what you
              prefer below:
            </p>
          </div>
          <div className="flex p-6 w-full bg-[#ffffff1c] rounded-lg m-2 divide-x-2 divide-gray-400">
            <img src={info} />
            <form className="flex flex-col p-6 items-start space-y-12 [&>div>input:focus]:ring-2 [&>div>input]:ring-orange-300">
              <div className="space-x-6">
                <label className="text-white text-lg">Cost</label>
                <input
                  type="number"
                  className="appearance-none focus:outline-none cursor-text p-2 bg-[#ffffff71] text-white"
                />
              </div>
              <div className="space-x-6">
                <label className="text-white text-lg">Allergies</label>
                <input
                  type="checkbox"
                  className="bg-[#ffffff71] text-white scale-150 accent-orange-300"
                />
              </div>
              <button
                type="submit"
                className="bg-[#f58820] border hover:border-[#f58820] text-white px-10 py-2 hover:bg-opacity-75 rounded-full"
              >
                Generate
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col m-2 h-screen p-20 gap-20">
          <div className="flex items-start">
            <p className="p-2 capitalize text-4xl text-white text-left font-semibold leading-snug ">
              Based on your preferences your meal plans are following:
            </p>
          </div>
          <div className="grid grid-cols-1 w-full h-full bg-gray-100 divide-slate-300 divide-y divide-x [&>*]:divide-y [&>*]:divide-x [&>*>div:nth-child(1)]:text-2xl [&>*>div:nth-child(1)]:text-gray-700 [&>*>div:nth-child(1)]:font-bold [&>*>div:nth-child(1)]:flex [&>*>div:nth-child(1)]:items-center [&>*>div:nth-child(1)]:justify-center rounded-lg m-2">
            <div className="grid grid-cols-5">
              <div className="col-span-1">Meal Plan 1</div>
              <div className="col-span-3"></div>
            </div>

            <div className="grid grid-cols-5">
              <div className="col-span-1">Meal Plan 2</div>
              <div className="col-span-4"></div>
            </div>

            <div className="grid grid-cols-5">
              <div className="col-span-1">Meal Plan 3</div>
              <div className="col-span-4"></div>
            </div>
          
          </div>
        </div>
        <OverlayButton />
      </Container>
      </DarkBg>
    </>
  );
};

export default Home;
