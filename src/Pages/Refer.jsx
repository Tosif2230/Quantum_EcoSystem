import { MdArrowOutward } from "react-icons/md";

const Refer = () => {
  return (
    <section className="flex justify-center items-center p-12 ">
      <div className="flex w-[60%] m-2 gap-40">
        {/* Left Section */}
        <div className="flex flex-col bg-black  ">
          <div className="">
            <h1
              className="text-white text-wrap text-3xl w-auto font-semibold"
              style={{ textTransform: "capitalize" }}
            >
              Refer Your Friends And Win Rewards
            </h1>
            <p
              className="text-white mt-8 text-[20px] text-wrap font-light w-auto"
              style={{ textTransform: "capitalize" }}
            >
              Introduce your friends to the world of crypto and receive $25 paid
              out in Bitcoin for each successful referral
            </p>

            <div className="flex">
              <button
                className="flex items-center gap-5 mt-8 text-white font-medium border border-amber-500 rounded-full px-3"
                style={{ textTransform: "capitalize" }}
              >
                Get A Demo
                <MdArrowOutward className="bg-amber-600 rounded-full" />
              </button>
            </div>

            <img
              src="./src/assets/Illustration.png"
              alt="Group"
              className="flex items-end mt-6 h-35 w-35"
            />
          </div>
        </div>
        {/* Right Section*/}
        <div className="flex flex-col bg-black ">
          <div className="">
            <h1
              className="text-white text-wrap text-3xl w-auto font-semibold"
              style={{ textTransform: "capitalize" }}
            >
              grow with your community
            </h1>
            <p
              className="text-white mt-8 text-[20px] text-wrap font-light w-auto  "
              style={{ textTransform: "capitalize" }}
            >
              Earn a revenue share by joining Nexo's Affiliate Program. Make
              money every time an invited user earns interest, swaps, or borrows
              funds.
            </p>

            <div className="flex">
              <button
                className="flex items-center gap-5 mt-8 text-white font-medium border border-amber-500 rounded-full px-3"
                style={{ textTransform: "capitalize" }}
              >
                become an affiliator
                <MdArrowOutward className="bg-amber-600 rounded-full" />
              </button>
            </div>
          </div>
          <img
            src="./src/assets/Group.png"
            alt="Group"
            className="items-center mt-6 h-45 w-70"
          />
        </div>
      </div>
    </section>
  );
};

export default Refer;
