import Illustration from "../assets/Refer/Illustration.png";
import Group from "../assets/Refer/Group.png";
import { MdArrowOutward } from "react-icons/md";

const Refer = () => {
  return (
    <section className="bg-[url(src/assets/Refer/Backgroung.jpg)] bg-cover bg-center">
      <div className="flex justify-center items-center max-w-full m-auto gap-25 py-10 px-50">
        {/* Left Section */}
        <div className="flex flex-col w-[40%] min-h-screen">
          <div className="flex flex-col">
            <h1 className="font-raleway text-[32px] capitalize">
              refer Your friends and win rewards
            </h1>
            <p className="text-[20px] font-lato w-[75%] capitalize mt-8">
              Introduce your friends to the world of crypto and receive $25 paid
              out in Bitcoin for each successful referral
            </p>

            <div className="">
              <button className="flex items-center gap-5 mt-8 font-raleway text-[14px] cursor-pointer border border-amber-500 rounded-full px-3 capitalize">
                start inviting
                <MdArrowOutward className="bg-amber-600 rounded-full" />
              </button>
            </div>
            <div className="flex justify-end">
              <img src={Illustration} alt="Group" className="h-40 w-40" />
            </div>
          </div>
        </div>
        {/* Right Section*/}
        <div className="flex flex-col w-[42%] min-h-screen">
          <div className="flex flex-col">
            <h1 className="font-raleway text-[32px] capitalize">
              grow with Your community
            </h1>
            <p className="text-[20px] font-lato w-[75%] capitalize mt-6">
              Earn a revenue share by joining Nexo's Affiliate Program. Make
              money every time an invited user earns interest, swaps, or borrows
              funds.
            </p>

            <div className="flex">
              <button className="flex items-center gap-5 mt-4  font-raleway text-[14px] cursor-pointer border border-amber-500 rounded-full px-3 capitalize">
                become an affiliator
                <MdArrowOutward className="bg-amber-600 rounded-full" />
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={Group}
                alt="Group"
                className="flex justify-end items-end"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refer;
