import Group from "../assets/Hero/Group.png"
import { MdArrowOutward } from "react-icons/md";


function Hero() {
  return (
    <section className="flex flex-col justify-center items-center bg-[rgba(13,13,13,1)]">
      <div className="flex ">
        <div className="p-20">
          <div className="">
            <h1 className="text-[96px] font-raleway leading-22 ">
              Buy & <br />
              Earn Interest
            </h1>
            <h2 className="text-[32px] font-raleway">
              on BTC, USDT and Other Digital Assets
            </h2>
            <p className="text-[24px] font-lato pt-4">
              Grow your crypto wealth and keep it secure with us.
            </p>
          </div>
          <div className="flex gap-10 pt-4">
            <button className="flex items-center text-[20px] my-2 py-1 gap-25  font-raleway bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full px-3">
              Get Started
              <MdArrowOutward className="bg-white rounded-full text-amber-950" />
            </button>
            <button className="flex items-center text-[20px] my-2 py-1 gap-25 font-raleway rounded-full px-3 border border-transparent [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box]">
              Get A Demo
              <MdArrowOutward className="bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full" />
            </button>
          </div>
        </div>
        <img
          src={Group}
          alt="Group"
          className="h-50 w-80 mt-20 border-amber-50"
        />
      </div>

      <div className="flex justify-center font-lato gap-8 cursor-pointer py-10">
        <div className=" bg-[rgba(217,217,217,0.1)] p-4 rounded-xl hover:bg-[rgba(217,217,217,0.5)] pb-8 border border-amber-50">
          <h2 className="text-[40px] text-center">$130 Bn+</h2>
          <p className="text-[rgba(135,135,135,1)] text-[16px]">
            Processed in 5+ Years
          </p>
        </div>
        <div className=" bg-[rgba(217,217,217,0.1)] p-4 rounded-xl hover:bg-[rgba(217,217,217,0.5)] pb-8 border border-amber-50">
          <h2 className="  text-[40px] text-center">6 Mn+</h2>
          <p className="text-[rgba(135,135,135,1)] text-[16px]">
            User available Worldwide
          </p>
        </div>
        <div className=" bg-[rgba(217,217,217,0.1)] p-4 rounded-xl hover:bg-[rgba(217,217,217,0.5)] pb-8 border border-amber-50">
          <h2 className="  text-[40px] text-center">70+</h2>
          <p className="text-[rgba(135,135,135,1)] text-[16px]">
            Supported cryptocurrencies
          </p>
        </div>
        <div className=" bg-[rgba(217,217,217,0.1)] p-4 rounded-xl hover:bg-[rgba(217,217,217,0.5)] pb-8 border border-amber-50">
          <h2 className="  text-[40px] text-center">200+</h2>
          <p className="text-[rgba(135,135,135,1)] text-[16px]">
            Available jurisdiction
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
