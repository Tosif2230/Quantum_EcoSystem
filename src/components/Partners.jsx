import PS1 from "../assets/Partner_Img/ps_1.png";
import PS2 from "../assets/Partner_Img/ps_2.png";
import PS3 from "../assets/Partner_Img/ps_3.png";
import PS4 from "../assets/Partner_Img/ps_4.png";
import PS5 from "../assets/Partner_Img/ps_5.png";
import PS6 from "../assets/Partner_Img/ps_6.png";
import PS7 from "../assets/Partner_Img/ps_7.png";

import Award1 from "../assets/Partner_Img/award_1.png";
import Award2 from "../assets/Partner_Img/award_2.png";
import Award3 from "../assets/Partner_Img/award_3.png";
import PartnerBg from "../assets/Partner_Img/Frame64.jpg";
import Partner from "../assets/Partner_Img/Group_11.jpg";

import { MdArrowOutward } from "react-icons/md";

const Partners = () => {
  return (
    <div
      className="bg-cover bg-center p-5"
      style={{ background: `url(${PartnerBg})` }}
    >
      <div className="relative flex flex-col lg:py-10">
        <div className="flex flex-col">
          <h1 className="text-[25px] font-raleway font-bold lg:text-[50px] text-center">
            Cooperative Partners
          </h1>
          <div className="m-auto lg:w-[73%] ">
            <div className="flex justify-start gap-3  md:gap-10 items-center">
              <img
                src={PS1}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
              <img
                src={PS2}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
              <img
                src={PS3}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
              <img
                src={PS4}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
            </div>
            <div className="flex justify-end gap-10 items-center">
              <img
                src={PS5}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
              <img
                src={PS6}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
              <img
                src={PS7}
                alt=""
                className="h-10 w-15 md:h-15 md:w-30 lg:h-20 lg:w-40"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-start md:items-end lg:gap-20 py-5 md:py-10">
            <div className="flex flex-col lg:w-[30%] md:w-[63%] p-2">
              <h2 className="text-[20px] md:text-[25px] lg:text-[34px] font-raleway font-bold w-60 md:w-90 lg:w-full">
                Trusted, Award-Winning Digital Asset Platform
              </h2>
              <p className="text-[11px] lg:text-[16px] w-[80%] py-2 lg:py-5 ">
                See all prestigious awards recognizing Nexo's cutting-edge
                technology, ease of use, and overall mission to serve as a
                bridge between traditional and digital finance.
              </p>
            </div>
            <div className="flex h-20 lg:h-40 gap-2 px-2">
              <img src={Award1} alt="award 1" />
              <img src={Award2} alt="award 2" />
              <img src={Award3} alt="award 3" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img src={Partner} alt="Partner" className="rounded-3xl p-2" />
              <div className="absolute top-1 w-full px-4 py-2 md:px-8 lg:px-10 md:py-2">
                <h2 className="capitalize text-[rgba(178,94,22,1)] font-raleway lg:text-[48px] md:text-[40px]">
                  join the community
                </h2>

                <h2 className="flex justify-end capitalize font-raleway lg:text-[48px] md:text-[40px] leading-3 md:leading-7 lg:leading-12 ">
                  and grow your portfolio
                </h2>
                <div className="flex flex-col w-[50%] mt-2 md:mt-18 lg:mt-25">
                  <p className="text-[rgba(178,94,22,1)] md:w-[80%] text-[6.5px] md:text-[15px] lg:text-[18px]">
                    Earn interest on your digital assets, borrow against them,
                    and exchange crypto with zero fees on the highly-rated app.
                  </p>
                  <div>
                    <button className="flex items-center px-1 md:px-2 lg:px-3 md:my-2 text-[10px] md:text-[15px] lg:text-[20px] cursor-pointer my-1 lg:my-5 gap-2 lg:gap-10 lg:w-50 font-raleway bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full">
                      Get Started
                      <div className="bg-white rounded-full text-amber-950">
                        <MdArrowOutward />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
