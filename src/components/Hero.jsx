import Group from "../assets/Hero/Group.png";
import { MdArrowOutward } from "react-icons/md";
import Card from "./Card";
import Refer from "./Refer";
import Security from "./Security";
import Partners from "./Partners";
import H1 from "../layout/ui/H1.jsx";

function Hero() {
  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[url(src/assets/Hero/HeroBG.jpg)] bg-center bg-cover">
        <div className="xl:flex md:flex">
          <div className="xl:p-20 md:p-10 p-8">
            <div className="">
              <H1>
                Buy & <br />
                Earn Interest
              </H1>
              <h2 className="text-sm xl:text-[32px] md:text-[19px] font-raleway">
                on BTC, USDT and Other Digital Assets
              </h2>
              <p className="text-sm md:text-[15px] xl:text-[24px] font-lato xl:pt-4 md:pt-2 p-1">
                Grow your crypto wealth and keep it secure with us.
              </p>
            </div>
            <div className="xl:flex md:flex xl:gap-10 xl:pt-4">
              <button className="flex items-center xl:text-[20px] py-1 xl:my-2 xl:py-2 cursor-pointer hover:text-stone-300 hover:scale-[1.01] gap-25  font-raleway bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full px-3">
                Get Started
                <MdArrowOutward className="bg-white rounded-full text-amber-950" />
              </button>
              <button className="flex items-center xl:text-[20px] py-1 xl:my-2 xl:py-2 cursor-pointer hover:text-stone-300 hover:scale-[1.01] gap-25 font-raleway rounded-full px-3 border border-transparent [background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,rgba(240,189,57,1),rgba(178,94,22,1),rgba(198,41,41,1))_border-box]">
                Get A Demo
                <MdArrowOutward className="bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full" />
              </button>
            </div>
          </div>
          <img
            src={Group}
            alt="Group"
            className="xl:h-50 xl:w-auto md:h-25 md:mt-10 xl:mt-20 h-25 w-auto items-center"
          />
        </div>

        <div className="xl:flex md:flex justify-center font-lato xl:gap-8 md:gap-4 cursor-pointer xl:py-10 md:py-8 py-6">
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

      <Card />
      <Refer />
      <Security />
      <Partners />
    </>
  );
}

export default Hero;
