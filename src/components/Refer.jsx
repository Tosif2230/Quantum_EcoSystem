import Illustration from "../assets/Refer/Illustration.png";
import Group from "../assets/Refer/Group.png";
import ReferBackground from "../assets/Refer/Backgroung.jpg";
import { MdArrowOutward } from "react-icons/md";

const Refer = () => {
  return (
    <section
      className="bg-cover bg-center p-5"
      style={{ background: `url(${ReferBackground})` }}
    >
      <div className="flex flex-col md:flex-row md:justify-center px-5 w-full gap-5 md:gap-x-10 lg:gap-x-50 md:p-5">
        {/* Left Section of this page */}
        <div className="flex flex-col md:w-[45%] lg:w-[30%]">
          <h2 className="font-raleway font-bold text-[20px] lg:text-[32px] md:text-[28px] capitalize leading-5 md:leading-7 lg:leading-10">
            refer Your friends and win rewards
          </h2>
          <p className="text-[12px] lg:text-[20px] py-2 capitalize w-[80%]">
            Introduce your friends to the world of crypto and receive $25 paid
            out in Bitcoin for each successful referral
          </p>

          <div className="py-1">
            <button className="flex items-center font-raleway gap-3 px-4 py-1 md:my-4 font-bold text-[10px] xl:text-[14px] border border-[rgba(209,159,30,1)] rounded-4xl capitalize cursor-pointer">
              start inviting
              <div className="bg-[rgba(209,159,30,1)] rounded-full">
                <MdArrowOutward />
              </div>
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={Illustration}
              alt="Group"
              className="h-25 w-25 lg:h-35 lg:w-35"
            />
          </div>
        </div>
        {/* Right Section of this page*/}
        <div className="flex flex-col md:w-[45%] lg:w-[30%]">
          <h2 className="font-raleway font-bold text-[20px] lg:text-[32px] md:text-[28px] capitalize leading-5 md:leading-7 lg:leading-10">
            grow with Your community
          </h2>
          <p className="text-[12px] lg:text-[20px] py-2 capitalize w-[80%] lg:w-[90%]">
            Earn a revenue share by joining Nexo's Affiliate Program. Make money
            every time an invited user earns interest, swaps, or borrows funds.
          </p>

          <div className="">
            <button className="flex items-center font-raleway gap-3 px-4 py-1 md:my-3 font-bold text-[10px] xl:text-[14px] border border-[rgba(209,159,30,1)] rounded-4xl capitalize cursor-pointer">
              become an affiliator
              <div className="bg-[rgba(209,159,30,1)] rounded-full">
                <MdArrowOutward />
              </div>
            </button>
          </div>
          <div className="flex justify-end px-5">
            <img
              src={Group}
              alt="Group"
              className="h-35 w-45 lg:h-40 lg:w-50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refer;
