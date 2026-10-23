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

import Partner from "../assets/Partner_Img/Group_11.jpg";

import { MdArrowOutward } from "react-icons/md";

const Partners = () => {
  return (
    <div className="bg-[url(src/assets/Partner_Img/Frame64.jpg)] bg-cover bg-center ">
      <div className="relative flex flex-col py-10">
        <div className="flex flex-col">
          <h1 className="text-[50px] text-center">Cooperative Partners</h1>
          <div className="m-auto w-[65%]">
            <div className="flex justify-start gap-10 items-center">
              <img src={PS1} alt="" />
              <img src={PS2} alt="" />
              <img src={PS3} alt="" />
              <img src={PS4} alt="" />
            </div>
            <div className="flex justify-end gap-10 items-center">
              <img src={PS5} alt="" />
              <img src={PS6} alt="" />
              <img src={PS7} alt="" />
            </div>
          </div>
          <div className="flex justify-center items-end gap-20 py-20 mt-10">
            <div className="flex flex-col w-[30%]">
              <h2 className="text-[34px] font-raleway">
                Trusted, Award-Winning Digital Asset Platform
              </h2>
              <p className="text-[16px] w-[80%] py-5">
                See all prestigious awards recognizing Nexo's cutting-edge
                technology, ease of use, and overall mission to serve as a
                bridge between traditional and digital finance.
              </p>
            </div>
            <div className="flex h-40 gap-2">
              <img src={Award1} alt="award 1" />
              <img src={Award2} alt="award 2" />
              <img src={Award3} alt="award 3" />
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={Partner}
                alt="Partner"
                className="rounded-3xl "
              />
              <div className="absolute top-1 w-full px-10 py-2">
                <h2 className="capitalize text-[rgba(178,94,22,1)] font-raleway text-[48px]">
                  join the community
                </h2>

                <h2 className="flex justify-end capitalize font-raleway text-[48px] leading-[100%] ">
                  and grow your portfolio
                </h2>
                <div className="flex flex-col w-[50%] mt-25">
                  <p className="text-[rgba(178,94,22,1)] w-[75%] text-[14px]">
                    Earn interest on your digital assets, borrow against them,
                    and exchange crypto with zero fees on the highly-rated app.
                  </p>
                  <button className="flex items-center text-[20px] cursor-pointer my-5 py-1 gap-10 w-50 font-raleway bg-linear-to-r from-[rgba(240,189,57,1)] via-[rgba(178,94,22,1)] to-[rgba(198,41,41,1)] rounded-full px-3">
                    Get Started
                    <MdArrowOutward className="bg-white rounded-full text-amber-950" />
                  </button>
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
