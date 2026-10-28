import Group from "../assets/Hero/Group.png";
import { MdArrowOutward } from "react-icons/md";
import Buy from "./Buy.jsx";
import Refer from "./Refer";
import Security from "./Security";
import Partners from "./Partners";

function Hero() {
  return (
    <>
      <section className={`flex flex-col items-center bg-[url(./src/assets/Hero/HeroBG.jpg)] lg:min-h-screen bg-center bg-cover p-5`}>
        <div className="">
          <div className="md:flex md:py-20">
            <div className="">
              <div className="w-auto">
                <h1 className="text-center md:text-left text-[35px] md:text-[60px] lg:text-[80px] font-raleway font-bold leading-8 md:leading-14 lg:leading-18">
                  Buy & <br />
                  Earn Interest
                </h1>
                <h2 className="text-center md:text-left text-[15px] xl:text-[28px] lg:text-[18px] md:text-[14px] px-0.5 font-raleway">
                  on BTC, USDT and Other Digital Assets
                </h2>
                <h3 className="text-center md:text-left text-[11px] xl:text-[20px] lg:text-[14px] md:text-[10px] px-0.5 xl:py-2 lg:py-1.5">
                  Grow your crypto wealth and keep it secure with us.
                </h3>
              </div>
              <div className="flex justify-center md:justify-start gap-2 xl:gap-10 lg:gap-5 md:gap-3 py-2">
                <button className="flex items-center font-bold text-[15px] xl:text-[18px] md:py-1 lg:text-[14px] gap-5 xl:gap-20 lg:gap-14 px-2 xl:px-3 cursor-pointer hover:text-stone-300 hover:scale-[1.01] rounded-full bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)]">
                  Get Started
                  <div className="bg-white rounded-full text-amber-950">
                    <MdArrowOutward />
                  </div>
                </button>
                <button className="flex items-center font-bold text-[15px] xl:text-[18px] md:py-1 lg:text-[14px] gap-5 xl:gap-20 lg:gap-14 px-2  xl:px-3 cursor-pointer hover:text-stone-300 hover:scale-[1.01] rounded-full border border-transparent [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box]">
                  Get A Demo
                  <div className="bg-red-500 bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full">
                    <MdArrowOutward />
                  </div>
                </button>
              </div>
            </div>
            <div className="flex justify-center py-4 md:py-0 lg:px-20 px-10">
              <img
                src={Group}
                alt="Group"
                className="h-40 w-auto xl:h-45 md:h-30"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-row gap-1 md:gap-0  w-[95%] md:grid-cols-4 cursor-pointer">
            <div className=" bg-[rgba(217,217,217,0.1)] p-2 rounded-xl hover:bg-[rgba(217,217,217,0.5)] border border-amber-50 md:w-[85%]">
              <h2 className="text-15px] xl:text-[25px] lg:text-[20px] md:text-[15px]  text-center font-bold">
                $130 Bn+
              </h2>
              <p className="text-[10px] xl:text-[15.5px] lg:text-[15px] md:text-[12px] w-auto  text-wrap text-center text-[rgba(135,135,135,1)]">
                Processed in 5+ Years
              </p>
            </div>
            <div className=" bg-[rgba(217,217,217,0.1)] p-2 rounded-xl hover:bg-[rgba(217,217,217,0.5)] border border-amber-50 md:w-[85%]">
              <h2 className="text-[15px] xl:text-[25px] lg:text-[20px] md:text-[15px]  text-center font-bold">
                6 Mn+
              </h2>
              <p className="text-[10px] xl:text-[15.5px] lg:text-[15px] md:text-[12px] w-auto  text-wrap text-center text-[rgba(135,135,135,1)]">
                User available Worldwide
              </p>
            </div>
            <div className=" bg-[rgba(217,217,217,0.1)] p-2 rounded-xl hover:bg-[rgba(217,217,217,0.5)] border border-amber-50 md:w-[85%]">
              <h2 className="text-[15px] xl:text-[25px] lg:text-[20px] md:text-[15px]  text-center font-bold">
                70+
              </h2>
              <p className="text-[10px] xl:text-[15.5px] lg:text-[15px] md:text-[12px] w-auto  text-wrap text-center text-[rgba(135,135,135,1)]">
                Supported cryptocurrencies
              </p>
            </div>
            <div className=" bg-[rgba(217,217,217,0.1)] p-2 rounded-xl hover:bg-[rgba(217,217,217,0.5)] border border-amber-50 md:w-[85%]">
              <h2 className="text-[15px] xl:text-[25px] lg:text-[20px] md:text-[15px]  text-center font-bold">
                200+
              </h2>
              <p className="text-[10px] xl:text-[15.5px] lg:text-[15px] md:text-[12px] w-auto  text-wrap text-center text-[rgba(135,135,135,1)]">
                Available jurisdiction
              </p>
            </div>
          </div>
        </div>
      </section>

      <Buy />
      <Refer />
      <Security />
      <Partners />
    </>
  );
}

export default Hero;
