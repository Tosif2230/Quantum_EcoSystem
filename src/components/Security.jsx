import SecurityImage from "../assets/Security_Img/Group_1171275436.png";
import { MdArrowOutward } from "react-icons/md";

const Security = () => {
  return (
    <div className="relative bg-[url(src/assets/Security_Img/Frame_59.jpg)] bg-cover bg-center">
      <div className="flex justify-center items-center md:py-16 lg:py-20 lg:px-8 xl:py-25 xl:px-0 p-5">
        <img
          src={SecurityImage}
          alt="Security Image"
          className="w-[80%] h-auto"
        />
      </div>
      <div
          className="absolute flex flex-col items-end text-end top-4 right-12 w-[30%]
          md:top-15 md:right-25 md:w-[30%]
          lg:top-24 lg:right-35 lg:w-[34%]"
        >
          <h2 className="text-[8px] md:text-[16px] lg:text-[30px] font-raleway font-bold">
            Sustainable Mode
          </h2>

          <p className="py-1 md:py-3 lg:py-8 text-[5px] md:text-[12px] lg:text-[18px]">
            Our proven real-time risk engine and strict collateralization
            requirements ensure we generate earnings in a safe way.
          </p>

          <button className="relative top-0 md:top-1 px-1 md:px-2 text-[7px] md:text-[13px] lg:text-[20px] flex items-center font-raleway font-bold justify-end gap-2 md:gap-3 rounded-full border-2 xl:border-3 border-[#e89f18]">
            Learn More
            <div className="rounded-full bg-[#e6ce46]">
              <MdArrowOutward />
            </div>
          </button>
        </div>

        <div
          className="absolute flex flex-col items-start text-start
          bottom-1 left-12 w-[30%] md:bottom-8 md:left-25 md:w-[30%]
          lg:bottom-14 lg:left-35 lg:w-[34%]"
        >
          <h2 className="text-[8px] md:text-[16px] lg:text-[30px] font-raleway font-bold">
            Custodial Insurance
          </h2>
          <p className="py-1 md:py-3 lg:py-8 text-[5px] md:text-[12px] lg:text-[18px]">
            All digital assets benefit from insurance from our custody partners
            such as Ledger Vault and Fireblocks.
          </p>
          <button className="relative top-0 md:top-1 px-1 md:px-2 text-[7px] md:text-[13px] lg:text-[20px] flex items-center font-raleway font-bold justify-end gap-2 md:gap-3 rounded-full border-2 xl:border-3 border-[#e89f18]">
            Learn More
            <div className="rounded-full bg-[#e6ce46]">
              <MdArrowOutward />
            </div>
          </button>
        </div>
    </div>
  );
};

export default Security;
